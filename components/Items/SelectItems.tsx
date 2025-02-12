import useItem from "@/hooks/useItem";
import SelectItemCat from "./SelectItem";

const SelectItemsCat = () => {
  const { item } = useItem();
  return (
    <div className="flex gap-2 flex-col ">
      {item.map((item, index) => (
        <SelectItemCat
          item={item.item}
          items={item.items}
          selectAccesorie={item.SetItem}
          key={index}
        />
      ))}
    </div>
  );
};

export default SelectItemsCat;
