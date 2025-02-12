import React from "react";
import { accesories } from "@/data/dataCat";
import { useAccesoryStore } from "@/store/accesories/accesories.store";
import { useEffect, useState } from "react";

interface Accesories {
  item: string;
  items: string[];
  SetItem: (item: string) => void;
}
const useItem = () => {
  const [item, setItem] = useState<Accesories[]>([]);
  //Item
  const hat = useAccesoryStore((state) => state.hat);
  const glasses = useAccesoryStore((state) => state.glasses);
  const beard = useAccesoryStore((state) => state.beard);
  const clothes = useAccesoryStore((state) => state.clothes);
  //SelectItem
  const SelectHat = useAccesoryStore((state) => state.SelectHat);
  const SelectGlasses = useAccesoryStore((state) => state.SelectGlasses);
  const SelectBeard = useAccesoryStore((state) => state.SelectBeard);
  const SelectClothes = useAccesoryStore((state) => state.SelectClothes);
  useEffect(() => {
    setItem([
      { item: hat, items: accesories.hat, SetItem: SelectHat },
      { item: glasses, items: accesories.glasses, SetItem: SelectGlasses },
      { item: clothes, items: accesories.clothes, SetItem: SelectClothes },
      { item: beard, items: accesories.beard, SetItem: SelectBeard },
    ]);
  }, []);
  return {
    item,
  };
};

export default useItem;
