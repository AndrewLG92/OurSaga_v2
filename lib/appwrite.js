import { Account, Avatars, Client, Databases, ID, Permission, Query, Role } from 'react-native-appwrite';


export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.os.oursage',
  projectId: '6704c5d6001cd9bb00dc',
  databaseId: '6704c7960011fa558ede',
  userCollectionId: '6704c7b0000860a69b24',
  videoCollectionId: '6704c7e900103bc9b86c',
  storageId: '6704c95f0018cab5250b',
}


// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username,
    )

    if(!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        username,
        email,
        avatar: avatarUrl
      },
      [Permission.read(Role.users())]
    )

    return newUser

  } catch (error) {
    console.log(error)
    throw new Error(error);
  }
}

export const signIn = async (email, password) => {

  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session
  } catch (error) {
    throw new Error(error);
  }

}

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();
    if(!currentAccount) throw Error;
    const currentUser = await databases.listDocuments(
      config.databaseId,
      config.userCollectionId,
      [Query.equal('accountId', currentAccount.$id)]
    )

    if(!currentUser) throw Error;

    return currentUser.documents[0]
  } catch (error) {
    console.log(error);
  }
}