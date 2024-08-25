function MethodsbyProps(props) {
    return <button onClick={props.event}>{props.text}</button> // the event that'll be execute was created in the component 'Event'
}
 
export default MethodsbyProps