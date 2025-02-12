import Image from 'next/image'
import React from 'react'

const Item = ({accesory, classname, name, size}: {accesory: string, classname: string, name: string, size: number}) => {
  return (
    <div className={`absolute ${classname} text-4xl font-bold text-blue-400`}>
    {accesory == name ? '' : <Image alt={accesory} src={`/images/${name}/${accesory}.png`} width={size} height={size} />}
      
    </div>
  )
}

export default Item
