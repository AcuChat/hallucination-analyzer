import './App.scss'

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useDispatch, useSelector } from 'react-redux';
import { counterDecrement, counterIncrement, counterSetValue } from './store/sliceCounter';
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
