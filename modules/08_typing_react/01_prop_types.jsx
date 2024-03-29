import PropTypes from 'prop-types';

function App() {
  return (
    <Child name="John" age="23">Hi I am John</Child>
  )
}

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
  address: PropTypes.shape({ // An object taking on a particular shape, it can also have other extra properties
    city: PropTypes.string,
    state: PropTypes.string
  }).isRequired,
  kids: PropTypes.arrayOf(PropTypes.string),
  dogs: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  status: PropTypes.oneOf(['active', 'inactive']),
  job: PropTypes.exact({ // An object with warnings on extra properties
    title: PropTypes.string,
    salary: PropTypes.number
  }),
  children: PropTypes.node // if it is a react component, we can use element here
}
