import { useSelector } from 'react-redux';
import './Prompts.scss';
import React from 'react'

function Prompts() {
  const responses = useSelector(state => state.responses);
  if (responses.currentResponseIndex === -1 ) return (<></>)
  
  return (
    <div className='Prompts'>Prompts</div>
  )
}

export default Prompts