import { StateCreator } from "zustand";

export interface ConfigSlice extends TextConfig {
  updateConfig: (config: Partial<TextConfig>) => void;
}

const createConfigSlice: StateCreator<ConfigSlice> = (set) => ({
  fontSize: 32,
  fontFamily: "Arial",
  textColor: "#FFFFFF",
  bgColor: "#000000",
  updateConfig: (config) => set((state) => ({ ...state, ...config })),
});

export default createConfigSlice;
