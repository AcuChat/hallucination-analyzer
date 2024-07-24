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

  console.log('RAGFixViewer models', models)
  console.log('responses', responses)

  const dispatch = useDispatch();

  function checkType(obj) {
    if (Array.isArray(obj)) {
      return 'array';
    } else if (typeof obj === 'string') {
      return 'string';
    } else {
      return 'other';
    }
  }

  const getRagFixResponse = async cur => {
    let passages = cur?.passages;
    const query = cur?.query;

    if (!passages || !query) {
      console.error('getRagfixResponse Error', cur);
      return;
    }

    let passagesType = checkType(passages);
    if (passagesType === 'string') {
      passages = JSON.parse(passages);
      passagesType = checkType(passages);
    }
    if (passagesType !== 'array') return false;

    passages = passages.filter(p => p.length ? true : false);

    const request = {
      url: backend + '/get-ragfix-response',
      method: 'post',
      data: {
        query,
        passages,
        model: models.curModel,
        temperature: Number(cur.temperature),
        id: cur.id
      }
    }

    console.log(request);

    const response = await axios(request);

    console.log('response', response.data.content);
    dispatch(responsesUpdateRagfixResponse({responseId: cur.id, acurai_response: response.data.content}));

  }
  useEffect(() => {
    const cur = responses.responses[responses.currentResponseIndex];
    console.log('useEffect cur', cur);
    if (!cur?.acurai_response) getRagFixResponse(cur);
  })
  if (responses.currentResponseIndex === -1 ) return (<></>)
  const curResponse = responses.responses[responses.currentResponseIndex];
  
  return (
    <div className='RAGFixViewer'>
      {/* <div className="RAGFixViewer__correct">Correct</div> */}
      <h2 className='RAGFixViewer__title'>RAGFix</h2>
      {spinner && <SyncLoader className='RAGFixViewer__spinner' />}
      {!spinner && <div className="RAGFixViewer__ragfix-results-container" dangerouslySetInnerHTML={{__html: curResponse.acurai_response.replaceAll("\n", "<br />")}}>
    
       </div>
      }
    </div>
  )
}

export default RAGFixViewer