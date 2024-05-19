import { useSelector } from 'react-redux';
import './Prompts.scss';
import React, { useEffect } from 'react'

function Prompts() {
  const responses = useSelector(state => state.responses);
  const models = useSelector(state => state.models);
  const labels = useSelector(state => state.labels);
  
  const getResponses = async () => {
    // const request = {
    //   url: `https://ragtruth-processor.acur.ai/`,
    //   method
    // }

      alert('get responses');
  }

  useEffect(() => {
    getResponses();
  }, [models, labels])
  
  if (responses.currentResponseIndex === -1 ) return (<></>)
  return (
    <div className='Prompts'>Prompts</div>
  )
}

export default Prompts