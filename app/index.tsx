import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import { router } from "expo-router";
import { FlatList, ListRenderItem, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { bgColors, textColors } from "@/constants/constants";
import useAppStore from "@/lib/zustand/store";
import TextConfigInput from "../components/TextConfigInput";


const index = () => {
  const [text, setText] = useState("Hello World!");
  const textColor = useAppStore(state => state.textColor)
  const bgColor = useAppStore(state => state.bgColor)
  const updateConfig = useAppStore(state => state.updateConfig)

  const handlePress = () => {
    router.push({ pathname: "/banner", params: { text } });
  }

  const updateTextColor = (color: string) => {
    updateConfig({ textColor: color });
  }

  const updateBgColor = (color: string) => {
    updateConfig({ bgColor: color });
  }


  return (
    <View style={styles.container}>
      <View style={[styles.textContainer, { backgroundColor: bgColor }]}>
        <Text style={[styles.previewText, { color: textColor }]}>
          {text}
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Type something..."
            value={text}
            cursorColor={"white"}
            placeholderTextColor={"white"}
            onChangeText={setText}
          />
          <Pressable style={styles.btn}>
            <FontAwesome name="send" size={20} color="white" onPress={handlePress} />
          </Pressable>
        </View>
        <View style={styles.config}>
          <Text style={styles.configTitle}>
            Text Color
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={textColors}
            keyExtractor={(item) => item}
            renderItem={({ item }) => <TextConfigInput item={item} selected={textColor} handlePress={updateTextColor} />}
          />
        </View>
        <View style={styles.config}>
          <Text style={styles.configTitle}>
            Background Color
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={bgColors}
            keyExtractor={(item) => item}
            renderItem={({ item }) => <TextConfigInput item={item} selected={bgColor} handlePress={updateBgColor} />}
          />
        </View>
      </View>
    </View>
  );
};
export default index;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  textContainer: {
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  previewText: {
    fontSize: 20,
    textAlign: "center",
    padding: 10,
  },
  inputContainer: {
    flex: 1,
    width: "100%",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "white",
    backgroundColor: "#1e1e1e",
    paddingHorizontal: 10,
    paddingVertical: 20,
    rowGap: 30,
  },
  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    fontSize: 18,
    color: "white",
    paddingHorizontal: 5,
  },
  btn: {
    height: 45,
    width: 45,
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  config: {
    rowGap: 20,
  },
  configTitle: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});
