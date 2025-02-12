import { create } from "zustand";

interface AccesoryState {
  hat: string;
  glasses: string;
  beard: string;
  clothes: string;
  SelectHat: (item: string) => void;
  SelectGlasses: (item: string) => void;
  SelectBeard: (item: string) => void;
  SelectClothes: (item: string) => void;
}

export const useAccesoryStore = create<AccesoryState>()((set, get) => ({
  hat: "hat",
  glasses: "glasses",
  beard: "beard",
  clothes: "clothes",

  SelectHat: (item: string) => set({ hat: item }),
  SelectGlasses: (item: string) => set({ glasses: item }),
  SelectBeard: (item: string) => set({ beard: item }),
  SelectClothes: (item: string) => set({ clothes: item }),
}));
