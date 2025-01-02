import { StyleSheet, Text, View } from "react-native";
import useAppStore from "@/lib/zustand/store";
import BannerItem from "@/components/BannerItem";
const BannersList = () => {
    const savedBanners = useAppStore((state) => state.banners);
    const isEmpty = savedBanners.length === 0;
    return (
        <View style={styles.list}>
            {
                isEmpty ? (
                    <Text style={{ color: "white", textAlign: "center" }}>No saved banners</Text>
                ) : (
                    savedBanners.map((banner) => (
                        <BannerItem key={banner.id} banner={banner} />
                    ))
                )
            }
        </View>
    );
};
export default BannersList;

const styles = StyleSheet.create({
    list: {
        paddingTop: 15,
    },
});
