import React from 'react'

function Nav({ state,send }) {
  const goTowelcome = () => {
    send('CANCEL')
  }
  return (
    <nav className="flex items-center justify-center  h-auto w-auto">
      <div className="flex space-x-20 bg-nav p-4 rounded-t-lg opacity-90 items-center w-full max-w-[420px] sm:max-w-[310px]">
        <p className='text-xl text-nav_tittle font-bold sm:text-base'>Book a Fly ✈</p>
        {!state.matches('initial')  && !state.matches('tickets') &&
          <button onClick={goTowelcome} className='bg-gray-100 hover:bg-[#d3dee6] hover:text-nav-tittle text-nav_tittle  py-1 px-4 border border-gray-400 rounded-md shadow h-8 text-center items-center  sm:px-2  sm:text-sm'>Cancel</button>
        }
      </div>
    </nav>
  )
}

export { Nav }
