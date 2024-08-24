import PropTypes from 'prop-types'

function LearningTypeProps({name, age}) { //here 'name' and 'age' stems from the object 'props', react receives just one object that is 'props'
  return (
    <>
      <p>The name is {name} and the age is {age}</p>
    </>
  )
}

LearningTypeProps.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
}

LearningTypeProps.defaultProps = {
  name: 'Coloque um nome',
  age: 0,
}

export default LearningTypeProps