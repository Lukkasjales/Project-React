import { useState } from 'react'

function PracticeuseState() {

    function increment() {
        setCounter(counter+1)
    }
    
    const [counter, setCounter] = useState(1)

    return (
        <>
            <button onClick={increment}>{counter}</button>
        </>
    )
}
 
export default PracticeuseState