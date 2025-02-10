import Image from 'next/image'
import React from 'react'

const Accesory = ({accesory, classname, name}: {accesory: string, classname: string, name: string}) => {
  return (
    <div className={`absolute ${classname} text-4xl font-bold text-blue-400`}>
    {accesory == '' ? '' : <Image alt={accesory} src={`/images/${name}/${accesory}.png`} width={200} height={200} />}
      
    </div>
  )
}

export default Accesory
