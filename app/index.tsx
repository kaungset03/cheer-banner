import { useState } from "react";
import { router } from "expo-router";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const index = () => {
  const [text, setText] = useState("");

  const handlePress = () => {
    router.push({pathname: "/banner", params: {text}});
  }


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Hello World"
          onChangeText={setText}
          value={text}
        />
        <Pressable style={styles.pressable} onPress={handlePress}>
          <FontAwesome name="send" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
};
export default index;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
  },
  pressable: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
