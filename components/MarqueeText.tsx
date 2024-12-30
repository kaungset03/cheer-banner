import { StyleSheet, Text, View, ViewStyle } from "react-native";

type MarqueeTextProps = {
    text: string;
    textStyle: {
        fontSize: number,
        fontFamily: string,
        color: string,
    };
    containerStyle: ViewStyle;
}

const MarqueeText = () => {
    return (
        <View>
            <Text>MarqueeText</Text>
        </View>
    );
};
export default MarqueeText;
const styles = StyleSheet.create({});
