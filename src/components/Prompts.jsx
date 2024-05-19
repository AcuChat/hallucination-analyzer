import { useDispatch, useSelector } from 'react-redux';
import './Prompts.scss';
import React, { useEffect } from 'react';
import axios from 'axios';
import { responsesSetResponses } from '../store/sliceResponses';

function Prompts() {
  const responses = useSelector(state => state.responses);
  const models = useSelector(state => state.models);
  const labels = useSelector(state => state.labels);
  const backend = useSelector(state => state.backend);

  const curResponse = responses.currentResponseIndex > -1 ? responses.responses[responses.currentResponseIndex] : null;

  const dispatch = useDispatch();
  
  const getResponses = async () => {
    const request = {
      url: `${backend}/get-responses`,
      method: 'post',
      data: {
        tasks: ['QA'],
        models: [models.curModel],
        labels: labels.labels.filter(label => label.selected).map(label => label.name) 
      }
    }

    const response = await axios(request);
    dispatch(responsesSetResponses(response.data));
  }

  useEffect(() => {
    getResponses();
  }, [models, labels])
  
  if (responses.currentResponseIndex === -1 ) return (<></>)
  return (
    <div className='Prompts'>
      <div className="Prompts__ragtruth">{curResponse ? curResponse.source.source_info.question : ''}</div>
      <div className="Prompts__ragfix"></div>
    </div>
  )
}

export default Prompts