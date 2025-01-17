import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

const Layout = () => {
  const [loaded, error] = useFonts({
    'SpaceMono': require("../assets/fonts/SpaceMono-Regular.ttf"),
    'Doto': require("../assets/fonts/Doto-Regular.ttf"),
    'PlaywriteAUSA': require("../assets/fonts/PlaywriteAUSA-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <Stack screenOptions={{ headerShown: false, animation: "fade_from_bottom", animationDuration: 300, animationTypeForReplace: "push" }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="create" />
        <Stack.Screen name="banner/index" />
        <Stack.Screen name="banner/[id]" />
      </Stack>
      <StatusBar showHideTransition={"slide"} hidden />
    </>
  );
};
export default Layout;