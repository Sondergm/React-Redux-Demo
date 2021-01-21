import { Fragment } from 'react'
import './App.css';
import Count from './containers/Count'
import Person from './containers/Person'

function App() {
  return (
    <Fragment key="outside">
      <Count/>
      <hr/>
      <Person/>
    </Fragment>
  );
}

export default App;