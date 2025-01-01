import { create, StateCreator } from "zustand";
import { persist, type PersistStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import createTextConfigSlice, {
  type TextConfigSlice,
} from "@/lib/zustand/textConfigSlice";
import createAnimationConfigSlice, {
  AnimationConfigSlice,
} from "@/lib/zustand/animationConfigSlice";
import createSavedBannerSlice, {
  SavedBannerSlice,
} from "@/lib/zustand/savedBannerSlice";

interface Store
  extends TextConfigSlice,
    AnimationConfigSlice,
    SavedBannerSlice {}

const initializer: StateCreator<
  Store,
  [["zustand/persist", unknown]],
  [],
  Store
> = (...a) => ({
  ...createTextConfigSlice(...a),
  ...createAnimationConfigSlice(...a),
  ...createSavedBannerSlice(...a),
});

const persistStorage: PersistStorage<any> = {
  getItem: async (name) => {
    const value = await AsyncStorage.getItem(name);
    return value ? JSON.parse(value) : undefined;
  },
  setItem: async (name, value) => {
    await AsyncStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: async (name) => {
    await AsyncStorage.removeItem(name);
  },
};

const useAppStore = create<Store>()(
  persist(initializer, {
    name: "app-state",
    storage: persistStorage,
    partialize: (state: Store) => ({
      banners: state.banners,
    }),
  })
);

export default useAppStore;
