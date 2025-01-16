import { StyleSheet, View } from "react-native";
import PreviewText from "@/components/PreviewText";
import BannerTextInput from "@/components/BannerTextInput";
import NavigationBar from "@/components/NavigationBar";

const Create = () => {
    return (
        <View style={styles.container}>
            <PreviewText />
            <View style={styles.inputContainer}>
                <BannerTextInput />
                <NavigationBar />
            </View>
        </View>
    );
};
export default Create;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    inputContainer: {
        flex: 1,
        width: "100%",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: "white",
        backgroundColor: "#1e1e1e",
        paddingHorizontal: 10,
        paddingVertical: 20,
        rowGap: 25,
    },
});
