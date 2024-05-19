import './App.scss'
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import RAGTruthCorpus from './pages/RAGTruthCorpus';

function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter)
  return (
    <div className='App'>
     <Header />
     <RAGTruthCorpus />
    </div>
  )
}

export default App
