import { Slider } from "@miblanchard/react-native-slider";
import useAppStore from "@/lib/zustand/store";

const AnimationSpeedInput = () => {
    const animationSpeed = useAppStore((state) => state.animationSpeed);
    const updateAnimationConfig = useAppStore((state) => state.updateAnimationConfig);

    const updateAnimationSpeed = (v: number) => {
        updateAnimationConfig({ animationSpeed: v })
    }


    return (
        <Slider
            value={animationSpeed}
            minimumValue={1}
            maximumValue={5}
            onValueChange={(value) => updateAnimationSpeed(value[0])}
        />
    );
};
export default AnimationSpeedInput;
