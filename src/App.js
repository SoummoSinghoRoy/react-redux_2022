import {useSelector, useDispatch} from 'react-redux'
import {actions} from './store/store';

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch(actions.increment())
  } 
  const decrementHandler = () => {
    dispatch(actions.decrement())
  }
  const addBy = () => {
    dispatch(actions.addBy(10))
  }

  return (
    <div className="App" style={{marginLeft: '20px', color: 'red'}}>
      <h1>Counter App</h1>
      <h3> {counter} </h3>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler} style={{marginLeft: '20px'}}>Decrement</button>
      <button onClick={addBy} style={{marginLeft: '20px'}}>Add by 10</button>
    </div>
  );
}

export default App;
