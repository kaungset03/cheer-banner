import { Stack } from "expo-router";
import { StatusBar } from "react-native";
const layout = () => {
  return (
    <>
      <Stack screenOptions={{ headerShown: false, animation: "fade_from_bottom", animationDuration: 300 }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="create" />
        <Stack.Screen name="banner" />
      </Stack>
      <StatusBar hidden />
    </>
  );
};
export default layout;