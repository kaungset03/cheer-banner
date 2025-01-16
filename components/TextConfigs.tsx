import { StyleSheet, View } from "react-native";
import TextColorInput from "@/components/TextColorInput";
import BackgroundColorInput from "@/components/BackgroundColorInput";
import TextSizeInput from "@/components/TextSizeInput";
import FontFamilyInput from "@/components/FontFamilyInput";


const TextConfigs = () => {


    return (
        <View style={styles.configContainer}>
            <TextColorInput />
            <BackgroundColorInput />
            <TextSizeInput />
            <FontFamilyInput />
        </View>
    );
};
export default TextConfigs;
const styles = StyleSheet.create({
    configContainer: {
        width: "100%",
        flex: 1,
        rowGap: 30,
    },
});
