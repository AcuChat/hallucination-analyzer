import { useDispatch, useSelector } from 'react-redux';
import './RAGFixViewer.scss';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { responsesUpdateRagfixResponse } from '../store/sliceResponses';
import { groundTruthReset, groundTruthSet } from '../store/sliceGroundTruth';
import SyncLoader from 'react-spinners/SyncLoader';
import { v4 as uuidv4 } from 'uuid';

function RAGFixViewer() {
  const [ activeButton, setActiveButton ] = useState('');
  
  const responses = useSelector(state => state.responses);
  const backend = useSelector(state => state.backend);
  const models = useSelector(state => state.models);
  const spinner = useSelector(state => state.spinner);

  const dispatch = useDispatch();

  const getRagFixResponse = async cur => {
    const passages = cur.passages;
    const query = cur.query;

    const request = {
      url: backend + '/get-ragfix-response',
      method: 'post',
      data: {
        query,
        passages,
        model: cur.model,
        temperature: cur.temperature
      }
    }
    
    const response = await axios(request);

    console.log('response', response.data);
    //dispatch(responsesUpdateRagfixResponse({responseId, ragfix: response.data}));

  }
  useEffect(() => {
    const cur = responses.responses[responses.currentResponseIndex];
    if (!cur.acurai_response) getRagFixResponse(cur);
  })
  if (responses.currentResponseIndex === -1 ) return (<></>)
  const curResponse = responses.responses[responses.currentResponseIndex];
  
  return (
    <div className='RAGFixViewer'>
      {/* <div className="RAGFixViewer__correct">Correct</div> */}
      <h2 className='RAGFixViewer__title'>RAGFix</h2>
      {spinner && <SyncLoader className='RAGFixViewer__spinner' />}
      {!spinner && <div className="RAGFixViewer__ragfix-results-container">
        {curResponse.acurai_response}
       </div>
      }
    </div>
  )
}

export default RAGFixViewer