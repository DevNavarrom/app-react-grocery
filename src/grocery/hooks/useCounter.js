
import { useState } from 'react'

export const useCounter = (initial=0, amount) => {

    const [counter, setCounter] = useState(initial)

    const increment = (factor = 1) => {
        if ( amount > 0 && counter < amount ) {
            setCounter(counter + factor)
        }
    }

    const decrement = (factor = 1) => {
        if ( amount > 0 && counter > 0 ) {
            setCounter(counter - factor)
        }
    }

    return { counter, increment, decrement }

}
