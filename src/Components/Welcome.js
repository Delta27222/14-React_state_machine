import React from 'react'

function Welcome({ state, send }) {
  const startBooking = () => {
    send('START')
  }
  return (
    // <div class="flex space-x-20 bg-steplayout p-4 rounded-b-lg items-center w-full max-w-[420px]">
    <div className="flex flex-col bg-steplayout p-4 rounded-b-lg justify-center w-full max-w-[420px] bg-opacity-90">
      <p className='m-0 text-base'>¡Today is the day🎇!</p>
      <p className='my-4'>Buy your flight ticket with us, and explore the world without excuses</p>
      <button onClick={startBooking} className='bg-blue-500 hover:bg-blue-700 text-white   py-1 px-4 rounded-md shadow text-center '>Start Booking</button>
    </div>
  )
}

export { Welcome }
