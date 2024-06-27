import { create } from "zustand";

interface IHeaderStore {
  isOpen: boolean;
  toggle: () => void;
}

const useHeaderStore = create<IHeaderStore>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useHeaderStore;
