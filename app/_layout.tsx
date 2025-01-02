import { Stack } from "expo-router";
import { StatusBar } from "react-native";
const Layout = () => {
  return (
    <>
      <Stack screenOptions={{ headerShown: false, animation: "fade_from_bottom", animationDuration: 300 }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="create" />
        <Stack.Screen name="banner/index" />
        <Stack.Screen name="banner/[id]" />
        <Stack.Screen name="edit/[id]" />
      </Stack>
      <StatusBar showHideTransition={"slide"} hidden />
    </>
  );
};
export default Layout;