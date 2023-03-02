import React, {  useRef} from 'react'
import { Btn_Name } from './Btn_Name'


function Passengers({ state,send }) {
  const textInputRef = useRef()

  const goToTickets = () => {
    send('DONE')
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      const { value } = textInputRef.current
      send('ADD', { newPassenger: value})
      textInputRef.current.value = ''
  }

  const { passengers } = state.context;
  console.log("🚀 ~ file: Passenger.js:20 ~ Passengers ~ passengers:", passengers)

  return (
    // <div class="flex space-x-20 bg-steplayout p-4 rounded-b-lg items-center w-full max-w-[420px]">
    <div className="flex flex-col bg-steplayout p-4 rounded-b-lg justify-center w-full max-w-[420px] gap-4 bg-opacity-90 sm:max-w-[310px]">
      <p className='m-0 text-base sm:text-[18px]'>¡Add people to the fly 👨‍👨‍👦‍👦!</p>
      <div id='passengers' className='flex flex-col items-start justify-center '>
        {passengers.map((person, idx) =>
          <Btn_Name name={person} key={`person-${idx}`} id={idx} send={send}/>
        )}
      </div>
      <form onSubmit={handleSubmit} className=' flex flex-col gap-4 border-none '>
        {/* {passengers.map((person, idx) => <p className='text' key={`person-${idx}`}>{person}</p>)} */}
        <input
          ref={textInputRef}
          id="name"
          name="name"
          type="text"
          placeholder='Full Name'
          required
          className='py-1 px-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
          // onChange={onChangeInput}
        />
        <div className='grid grid-cols-2 gap-4'>
          <button  type='submit' className='bg-gray-100 hover:bg-[#d3dee6] hover:text-nav-tittle text-nav_tittle  py-1 px-4 border border-gray-400 rounded-md shadow h-8 text-center items-center sm:text-[15px]'>Add</button>
          <button onClick={goToTickets} type='button' className='bg-blue-500 hover:bg-blue-700 text-white   py-1 px-4 rounded-md shadow text-center sm:text-[15px]'>Ticket</button>
        </div>
      </form>
    </div>
    
  )
}

export { Passengers }
