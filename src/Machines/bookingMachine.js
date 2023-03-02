import { fetchCountries } from '@/Utils/api';
import { assign, createMachine } from 'xstate'


const fillCountries = {
  initial: 'loading',
  states: {
    loading: {
      invoke: {
        id: 'getCountries',
        src: () => fetchCountries,
        onDone: {
          target: 'success',
          actions: assign({
            countries: (context,event)=> event.data
          })
        },
        onError: {
          target: 'failure',
          actions: assign({
            error: 'Fallo el request'
          })
        }
      }
    },
    success: {},
    failure: {
      on: {
        RETRY: { target: 'loading'}
      }
    }
  }
}


// Maquina principal
const bookingMachine = createMachine({
  predictableActionArguments: true,
  id: 'buy plane tickets',
  initial: 'initial',
  context: {
    passengers: [],
    selectedCountry: '',
    countries: [{}],
    error: ''
  },
  states: {
    initial: {
      on: {
        //evento ----- transicion
        START: {
          target: 'search',
        }
      }
    },
    search: {
      on: {
        CONTINUE: {
          target: 'passengers',
          actions: assign({
            selectedCountry: (context, event) => event.selectedCountry
          })
        },
        CANCEL: {
          target: 'initial',
          actions: assign((context,event) => {    //Asi lo hice yo, no es la manera optima pero funciona
            context.passengers = [];
            context.selectedCountry='';
          })
        },
      },
      ...fillCountries,
    },
    passengers: {
      on: {
        DONE: {
          target: 'tickets',
          cond: 'moreThanOnePassenger'
        },
        CANCEL: {
          target: 'initial',
          actions: 'cleanContext'         //Asi lo hicieron en la clase, ver las acciones del final del archivo
        },
        ADD: {
          target: 'passengers',
          actions: assign(
            (context,event) => context.passengers.push(event.newPassenger)
          )
        },
        DEL: {
          target: 'passengers',
          actions: assign(
            (context,event) => {
              context.passengers.splice(event.pos,1);
            }
          )
        },
      }
    },
    tickets: {
      after: {
        5000: {
          target:'initial',
          actions: 'cleanContext'
        }
      },
      on: {
        FINISH: {
          target: 'initial',
          actions: assign(
            (context,event) => {
              context.passengers = [];
              context.selectedCountry='';
            }
          )
        }
      }
    }
  },
},
{
  actions: {
    cleanContext: assign({        //Usado para limpiar el contexto
      selectedCountry:'',
      passengers: [],
    }),
    imprimirInicio: () =>     console.log("Imprimir inicio "),
    imprimirEntrada: () =>     console.log(" Entro por aca en el inicio"),
    imprimirSalida: () =>     console.log(" imprimir Salida"),
  },
  guards: {
    moreThanOnePassenger: (context) => {
      return context.passengers.length > 0;
    }
  }
}
);

export default bookingMachine
