import PropTypes from 'prop-types';

function Child({ name, age, children}) {
  return(
    <div>
      <strong>Name:</strong> {name}
      <br />
      <strong>Age:</strong> {age}
      <br />
      <strong>Age (in 10 years):</strong> {age + 10}
      <p>{children}</p>
    </div>
  )
}

// by default all props are optional, to make them required use isRequired
// https://github.com/facebook/prop-types
Child.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  address: PropTypes.shape({
    city: PropTypes.string,
    state: PropTypes.string
  }).isRequired,
  kids: PropTypes.arrayOf(PropTypes.string),
  dogs: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  status: PropTypes.oneOf(['active', 'inactive']),
  job: PropTypes.exact({
    title: PropTypes.string,
    salary: PropTypes.number
  }),
  children: PropTypes.node
}


function App() {
  return (
    <Child name="John" age="23">Hi I am John</Child>
  )
}

