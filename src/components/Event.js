import PropTypes from 'prop-types'

function Event({ digit }) { 
    function message() { 
        console.log(`clicked ${digit}`);
    }

    return (
        <>
            <button onClick={message}>Click to trigger an event</button> 
        </>
    )
    //'message' is a function's reference
    //'message()' would call the function at the moment the component is rendered
    
    //when the event is throw the page reloads, and the message in the console
    // is not seem
}

Event.propTypes = {
    number: PropTypes.string,
}

export default Event
