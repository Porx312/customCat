import React, { useEffect } from 'react'
import SelectItemCat from './SelectItem'
import { accesories } from '@/data/dataCat'
import { useAccesoryStore } from '@/store/accesories/accesories.store'

const SelectItemsCat = () => {
    //Item
    const hat =  useAccesoryStore(state => state.hat)
    const glasses =  useAccesoryStore(state => state.glasses)
    //SelectItem
    const SelectHat =  useAccesoryStore(state => state.SelectHat)
    const SelectGlasses =  useAccesoryStore(state => state.SelectGlasses)

  return (
    <>
    <SelectItemCat  item={hat} items={accesories.hat} selectAccesorie={SelectHat} />
    <SelectItemCat item={glasses} items={accesories.glasses} selectAccesorie={SelectGlasses} />
    </>
  )
}
    
export default SelectItemsCat
