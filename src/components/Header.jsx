import './Header.scss';
import React from 'react';
import RAGTruthIcon from '../assets/images/RAGTruth.svg'

function Header() {
  return (
    <div className='Header'>
      <img className='Header__icon' src={RAGTruthIcon} alt="" />
      <h1 className="Header__title">Hallucination Analyzer</h1>
    </div>
  )
}

export default Header