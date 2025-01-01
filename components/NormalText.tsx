import { Text, View, ViewStyle } from "react-native";

type NormalTextProps = {
    text: string;
    textStyles: {
        fontSize: number,
        fontFamily: string,
        color: string,
    };
    containerStyle: ViewStyle;
}

const NormalText = ({ text, textStyles, containerStyle }: NormalTextProps) => {
    return (
        <View style={containerStyle}>
            <Text style={[textStyles, { textAlign: "center" }]}>
                {text}
            </Text>
        </View>
    );
};
export default NormalText;
