import React, { useState } from 'react'
import { SelectContent, SelectTrigger, SelectValue, SelectItem } from '@/components/ui/select';
import { Select } from '@radix-ui/react-select';
const SelectItemCat = ({
  item,
  items,
  selectAccesorie,
}: {
  item: string;
  items: string[];
  selectAccesorie: (value: string) => void
}) => {
  return (
    <>
      <Select onValueChange={selectAccesorie}>
        <SelectTrigger className="w-full border-2 border-black">
          <SelectValue placeholder={item} />
        </SelectTrigger>
        <SelectContent>
          {items.map((item, index) => (
            <SelectItem key={index} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};

 /*   <Select value={selectedBeard} onValueChange={setSelectedBeard}>
            <SelectTrigger className="w-full border-2 border-black">
              <SelectValue placeholder="Barba" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="barba">barba</SelectItem>
              <SelectItem value="mostacho">mostacho</SelectItem>
            </SelectContent>
          </Select> */
export default SelectItemCat