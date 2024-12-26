import { create, StateCreator } from "zustand";
import createConfigSlice, { type ConfigSlice } from "@/lib/zustand/configSlice";

interface Store extends ConfigSlice {}

const initializer: StateCreator<Store, [], [], Store> = (...a) => ({
  ...createConfigSlice(...a),
});

const useAppStore = create<Store>()(initializer);

export default useAppStore;
