import { Stack } from "expo-router";
import { StatusBar } from "react-native";
const layout = () => {
  return (
    <>
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="banner" />
    </Stack>
    <StatusBar hidden />
    </>
  );
};
export default layout;