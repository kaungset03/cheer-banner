import { create, StateCreator } from "zustand";
import createTextConfigSlice, {
  type TextConfigSlice,
} from "@/lib/zustand/textConfigSlice";
import createAnimationConfigSlice, {
  AnimationConfigSlice,
} from "@/lib/zustand/animationConfigSlice";

interface Store extends TextConfigSlice, AnimationConfigSlice {}

const initializer: StateCreator<Store, [], [], Store> = (...a) => ({
  ...createTextConfigSlice(...a),
  ...createAnimationConfigSlice(...a),
});

const useAppStore = create<Store>()(initializer);

export default useAppStore;
