import { StateCreator } from "zustand";

export interface AnimationConfigSlice extends AnimationConfig {
  updateAnimationConfig: (config: Partial<AnimationConfig>) => void;
}

const createAnimationConfigSlice: StateCreator<AnimationConfigSlice> = (
  set
) => ({
  animationType: "right_to_left",
  animationSpeed: 2.5, 
  updateAnimationConfig: (config) => set((state) => ({ ...state, ...config })),
});

export default createAnimationConfigSlice;
