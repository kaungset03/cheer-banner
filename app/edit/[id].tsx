import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
const EditById = () => {
    const { id } = useLocalSearchParams();
    return (
        <View>
            <Text>EditById - {id}</Text>
        </View>
    );
};
export default EditById;
const styles = StyleSheet.create({});
