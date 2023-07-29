import { create } from "zustand";

interface AppState {
  page: number;
  setPage(page: number): void;
}

export const useAppStore = create<AppState>()((set) => ({
  page: 0,
  setPage: (number) => {
    set({ page: number });
  },
}));
