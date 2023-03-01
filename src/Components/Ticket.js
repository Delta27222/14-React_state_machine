import React from 'react'

function Ticket({ state, send }) {
  const finish = () => {
    send('FINISH')
  }

  const { passengers, selectedCountry  } = state.context;

  function show_country(int) {
    if (int == 0 ) {
      console.log('es cero, o sea el primero')
      return <p key={int} id={`city-${int}`} className='uppercase text-nav-tittle font-bold text-xs  h-auto'>{selectedCountry}</p>
    } else {
      console.log('salio por el else, no es el primero')
      return <p key={int} id={`city-${int}`} className='invisible uppercase text-nav-tittle font-bold text-xs '>{selectedCountry}</p>
    }
  }

  return (
    // <div class="flex space-x-20 bg-steplayout p-4 rounded-b-lg items-center w-full max-w-[420px]">
    <div className="flex flex-col bg-steplayout p-4 rounded-b-lg justify-center w-full max-w-[420px] bg-opacity-90">
      <p className='m-0 text-base'>¡Thank you for choosing us ❣!</p>
      <div className='flex flex-row  justify-center items-center w-full  p-5 '>
        <div id='country' className='w-[45%] flex pt-5 pb-5 pl-5 pr-5 bg-tickets_city border-r-stone-700 border-r border-dotted rounded-r-xl rounded text-nav_tittle'>
          <div id='city-container'className='grid col-end-1 items-center text-nav_tittle '>
            {passengers.map((person, idx) =>
              show_country(idx)
            )}
          </div>
        </div>
        <div className='w-[60%] flex flex-row space-x-16 bg-tickets_passengers pl-5 pt-5 pb-5  border-l-stone-700 border-l border-dotted rounded-l-xl rounded'>
          <div id='passengers' className='w-10'>
            {passengers.map((person, idx) =>
              <p key={idx}  id={`passenger-${idx}`} className='capitalize text-nav-tittle font-bold'>{person}</p>
            )}
          </div>
          <div className=' flex justify-center  items-start text-2xl'>
            ✈
          </div>
          {/* {context.passengers.map((person, idx) => {
            return <p key={idx}>{person}</p>
          })} */}
        </div>
      </div>
      <div className='flex flex-row justify-end'>
        <button onClick={finish} className='bg-blue-500 hover:bg-blue-700 text-white   py-1 px-4 rounded-md shadow text-center '>Finish</button>

      </div>
    </div>
  )
}

export { Ticket }
