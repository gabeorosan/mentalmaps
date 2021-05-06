import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {getNotes} from './actions/notes'
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getNotes())
}, [dispatch])
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
