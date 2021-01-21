import { Fragment } from 'react'
import './App.css';
import Count from './containers/Count'

function App() {
  return (
    <Fragment key="outside">
      <Count/>
    </Fragment>
  );
}

export default App;