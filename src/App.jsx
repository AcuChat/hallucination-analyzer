import './App.scss'
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import Acurai from './pages/Acurai';

function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter)
  return (
    <div className='App'>
     <Header />
     <Acurai />
    </div>
  )
}

export default App
