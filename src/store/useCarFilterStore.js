import { create } from "zustand";

export const useCarFilterStore = create((set) => ({
  activeFilter: "all",

  setActiveFilter: (filter) => {
    set({
      activeFilter: filter,
    });
  },
}));
