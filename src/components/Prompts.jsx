import { useSelector } from 'react-redux';
import './Prompts.scss';
import React, { useEffect } from 'react';
import axios from 'axios';

function Prompts() {
  const responses = useSelector(state => state.responses);
  const models = useSelector(state => state.models);
  const labels = useSelector(state => state.labels);
  
  const getResponses = async () => {
    const request = {
      url: `https://ragtruth-processor.acur.ai:5100/get-responses`,
      method: 'post',
      data: {
        tasks: ['QA'],
        models: [models.curModel],
        labels: labels.labels.filter(label => label.selected).map(label => label.name) 
      }
    }

    const response = await axios(request);
    console.log(response.data);
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