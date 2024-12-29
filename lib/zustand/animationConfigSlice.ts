import { StateCreator } from "zustand";

export interface AnimationConfigSlice extends AnimationConfig {
  updateAnimationConfig: (config: Partial<AnimationConfig>) => void;
}

const createAnimationConfigSlice: StateCreator<AnimationConfigSlice> = (
  set
) => ({
  animationType: "right_to_left",
  speed: 300,
  updateAnimationConfig: (config) => set((state) => ({ ...state, ...config })),
});

export default createAnimationConfigSlice;
