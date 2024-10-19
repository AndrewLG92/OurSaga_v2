import React, { useRef, useEffect, ReactNode } from 'react';
import { Animated, ViewStyle, StyleSheet } from 'react-native';

interface FadeOutLeftProps {
  children: ReactNode;
  style?: ViewStyle | ViewStyle[];
}

const FadeInForm: React.FC<FadeOutLeftProps> = ({ children, style }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  //const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  },[fadeAnim]);

  return (
    <Animated.View
      className="container"
      style={[
        style,
        {
          opacity: fadeAnim,
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};

export default FadeInForm;
