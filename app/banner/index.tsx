import { useEffect } from 'react';
import { Marquee } from '@animatereactnative/marquee';
import { Text, View, StyleSheet, useWindowDimensions, ViewStyle } from 'react-native';
import * as ScreenOrientation from "expo-screen-orientation";
import useAppStore from '@/lib/zustand/store';
import BlinkText from '@/components/BlinkText';
import NormalText from '@/components/NormalText';


const Banner = () => {
  const { text, fontSize, fontFamily, textColor, bgColor, animationType, animationSpeed } = useAppStore((state) => state)
  const width = useWindowDimensions().width;

  const duration = Math.round(1500 / animationSpeed);
  const textStyles = {
    fontSize,
    fontFamily,
    color: textColor,
  }

  const marqueeContainer: ViewStyle = {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: bgColor,
  }

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    return () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    };
  }, []);

  return (
    <View style={styles.container}>
      {
        animationType === "none" ? <NormalText text={text as string} textStyles={textStyles} containerStyle={marqueeContainer} />
          :
          animationType === "blink" ? <BlinkText text={text as string} textStyles={textStyles} containerStyle={marqueeContainer} duration={duration} />
            :
            <Marquee speed={animationSpeed} reverse={animationType === "left_to_right"} spacing={width} style={marqueeContainer}>
              <Text style={textStyles}>
                {text}
              </Text>
            </Marquee>}
    </View>
  );
}

export default Banner;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
