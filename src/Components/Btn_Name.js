import React from 'react'
import { IconDelete } from './icons'

function Btn_Name({ name, id, send }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    send('DEL', { name: name, pos: id})
  }
  return (
    <div className='flex flex-row items-center justify-center  p-1 px-2 bg-gray-400 rounded-sm  mb-1'>
      <p className='capitalize text-xs  '>{name}</p>
      <button className='pl-1' onClick={handleSubmit} >
        <IconDelete />
      </button>
    </div>
  )
}

export { Btn_Name }