import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import BannersList from "@/components/BannersList";
import PressableOpacity from "@/components/PressableOpacity";

const Index = () => {
  const handlePress = () => {
    router.navigate("/create")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      <BannersList />
      <PressableOpacity style={styles.btn} onPress={handlePress}>
        <Ionicons name="add" size={35} color="#1e1e1e" />
      </PressableOpacity>
    </View>
  );
};
export default Index;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    paddingTop: 45,
    position: "relative",
  },
  text: {
    color: "#e0e0e0",
    fontSize: 32,
    textAlign: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#e0e0e0",
    paddingBottom: 15,
  },
  btn: {
    position: "absolute",
    bottom: 80,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 10,
    backgroundColor: "#b0b0b0",
    justifyContent: "center",
    alignItems: "center",
  },
});
