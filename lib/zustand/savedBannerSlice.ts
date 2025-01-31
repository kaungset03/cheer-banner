import { StateCreator } from "zustand";

export interface SavedBannerSlice {
  banners: SavedBanner[];
  // add banner, remove banner, update banner
  addBanner: (banner: SavedBanner) => void;
  removeBanner: (bannerId: string) => void;
  updateBanner: (bannerId: string, banner: Partial<SavedBanner>) => void;
  deleteAllBanners: () => void;
}

const createSavedBannerSlice: StateCreator<SavedBannerSlice> = (set) => ({
  banners: [],
  addBanner: (banner) =>
    set((state) => ({ banners: [banner, ...state.banners] })),
  removeBanner: (bannerId) =>
    set((state) => ({
      banners: state.banners.filter((banner) => banner.id !== bannerId),
    })),
  updateBanner: (bannerId, banner) =>
    set((state) => ({
      banners: state.banners.map((b) =>
        b.id === bannerId ? { ...b, ...banner } : b
      ),
    })),
  deleteAllBanners: () => set({ banners: [] }),
});

export default createSavedBannerSlice;
