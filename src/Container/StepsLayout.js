import { Passengers } from '@/Components/Passenger'
import { Search } from '@/Components/Search'
import { Ticket } from '@/Components/Ticket'
import { Welcome } from '@/Components/Welcome'
import React from 'react'

function StepsLayout({ state, send }) {
  const  renderContext = () => {
    if(state.matches('initial')) return <Welcome send={send}/>
    if(state.matches('search')) return <Search state={state} send={send}/>
    if(state.matches('tickets')) return <Ticket state={state} send={send}/>
    if(state.matches('passengers')) return <Passengers state={state} send={send}/>
    return null
  }
  return (
    <div className="flex items-center justify-center  h-auto w-auto">
      {renderContext()}
    </div>
  )
}

export { StepsLayout }
