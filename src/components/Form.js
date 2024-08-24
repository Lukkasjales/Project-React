import { useState } from 'react'

function Form() {
    function signupUser(e) { //'e' is the method of the event, it could be 'event' or whatever
        e.preventDefault() //it cancels the form submission
        console.log("User signed up")
        console.log(name)
    }
    
    const [name, setName] = useState() //'name' is the current value and 'setName' is the function that modifies the value
    const [value, setValue] = useState(0) //'value' receives '0'
    return (
        <div>
            <h1>Sign up</h1>
            <form onSubmit={signupUser}> 
                <div>
                    <label htmlFor="name"></label>
                    <input type="text" 
                    placeholder="Enter your name" 
                    id="name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Sign up"/>
                </div>
            </form>
        </div>
    )
}

export default Form