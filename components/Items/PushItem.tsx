import { useAccesoryStore } from "@/store/accesories/accesories.store";
import Item from "./Item";

const PushItem = () => {
  const hat = useAccesoryStore((state) => state.hat);
  const glasses = useAccesoryStore((state) => state.glasses);
  const beard = useAccesoryStore((state) => state.beard);
  const clothes = useAccesoryStore((state) => state.clothes);
  return (
    <>
      <Item
        accesory={hat}
        name="hat"
        classname="-top-[1rem] left-[4.9rem] z-40 w-[200px]"
      />
      <Item
        accesory={glasses}
        name="glasses"
        classname="top-[3.5rem] left-[7.2rem] z-20 w-[130px]"
      />
      <Item
        accesory={beard}
        name="beard"
        classname="top-[6.8rem] left-[8.6rem] z-10 w-[80px]"
      />
      <Item
        accesory={clothes}
        name="clothes"
        classname="top-[4.7rem] left-[3.9rem] w-[229px]"
      />
    </>
  );
};

export default PushItem;
