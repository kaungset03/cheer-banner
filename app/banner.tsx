import { useEffect } from 'react';
import { Marquee } from '@animatereactnative/marquee';
import { useLocalSearchParams } from 'expo-router';
import { Text, View, StyleSheet, useWindowDimensions, ViewStyle } from 'react-native';
import * as ScreenOrientation from "expo-screen-orientation";
import useAppStore from '@/lib/zustand/store';


const banner = () => {
  const { fontSize, fontFamily, textColor, bgColor } = useAppStore((state) => state)
  const { text } = useLocalSearchParams()
  const width = useWindowDimensions().width;

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
      <Marquee speed={1.5} spacing={width} style={marqueeContainer}>
        <Text style={textStyles}>
          {text}
        </Text>
      </Marquee>
    </View>
  );
}

export default banner;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

