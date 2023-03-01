import React from 'react'
import { useMachine } from '@xstate/react'
import bookingMachine from '@/Machines/bookingMachine'
import { Nav } from '@/Components/Nav'
import { StepsLayout } from '@/Container/StepsLayout'
import Image from 'next/image'


function BaseLayouts() {
  const [ state, send ] = useMachine(bookingMachine)
  console.log('Esta es el valor de la maquina -> ', state.value, state.context)
  // console.log('matches true -> ', state.matches('initial'));
  // console.log('matches false -> ', state.matches('tickets'));
  // console.log('can true -> ', state.can('START'));
  // console.log('can false -> ', state.can('FINISH'));
  // console.log("🚀----------🚀")
  
  return (
    <>
      <Nav state={state} send={send}/>
      <StepsLayout state={state} send={send}/>
    </>
  )
}

export { BaseLayouts }
