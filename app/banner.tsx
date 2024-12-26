import { useEffect } from 'react';
import { Marquee } from '@animatereactnative/marquee';
import { useLocalSearchParams } from 'expo-router';
import { Text, View, StyleSheet, useWindowDimensions } from 'react-native';
import * as ScreenOrientation from "expo-screen-orientation";


const banner = () => {
  const { text } = useLocalSearchParams()
  const width = useWindowDimensions().width;

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Marquee speed={1.5} spacing={width} style={styles.marqueeContainer}>
        <Text style={styles.text}>
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
  marqueeContainer: {
    width: "100%",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 64,
    fontWeight: 'bold',
  },
});

