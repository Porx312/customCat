import { create } from 'zustand';



interface AccesoryState {
  hat: string,
  glasses: string,
  SelectHat: ( item: string ) => void;
  SelectGlasses: ( item: string ) => void;

}



export const useAccesoryStore = create<AccesoryState>()( ( set, get ) => ( {
  hat: 'hat',
  glasses: 'glasses',

  SelectHat: (item: string) => set(({ hat: item})),
  SelectGlasses: (item: string) => set(({ glasses: item }))
  

} ) );