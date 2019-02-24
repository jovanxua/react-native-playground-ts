import React, { useState, useEffect, ReactNode } from 'react';
import {
  Animated,
  SafeAreaView,
} from 'react-native';

interface IAnimatedBackgroundProps {
  children?: ReactNode;
}

function AnimatedBackground(props: IAnimatedBackgroundProps) {
  const { children } = props;
  const [animatedValue] = useState(new Animated.Value(0));

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 6,
          duration: 10000,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 10000,
        }),
      ]),
    ).start(); 
  }

  const color = animatedValue.interpolate({
    inputRange: [0, 1, 2, 3, 4, 5, 6],
    outputRange: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'],
  });

  return(
    <Animated.View style={{
      flex: 1,
      backgroundColor: color
    }}>
      <SafeAreaView style={{ backgroundColor: 'transparent' }}>
        { children }
      </SafeAreaView>
    </Animated.View>
  )
}

export default AnimatedBackground;