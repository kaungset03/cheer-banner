import { StateCreator } from "zustand";

export interface TextConfigSlice extends TextConfig {
  updateTextConfig: (config: Partial<TextConfig>) => void;
}

const createTextConfigSlice: StateCreator<TextConfigSlice> = (set) => ({
  fontSize: 32,
  fontFamily: "Arial",
  textColor: "#FFFFFF",
  bgColor: "#000000",
  updateTextConfig: (config) => set((state) => ({ ...state, ...config })),
});

export default createTextConfigSlice;
