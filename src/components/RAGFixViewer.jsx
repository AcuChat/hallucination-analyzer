import { useDispatch, useSelector } from 'react-redux';
import './RAGFixViewer.scss';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { responsesUpdateRagfixResponse } from '../store/sliceResponses';

function RAGFixViewer() {
  const [ activeButton, setActiveButton ] = useState('');
  const responses = useSelector(state => state.responses);
  const backend = useSelector(state => state.backend);
  const models = useSelector(state => state.models);
  const dispatch = useDispatch();

  const getRagFixResponse = async responseId => {
    const passages = responses.responses[responses.currentResponseIndex].source.source_info.passages.split("\n\n");
    passages.pop();

    const request = {
      url: backend + '/get-ragfix-response',
      method: 'post',
      data: {
        query: responses.responses[responses.currentResponseIndex].source.source_info.question,
        passages,
        responseId,
        model: models.curModel
      }
    }
    const response = await axios(request);

    console.log('ragfix response', response.data);

    dispatch(responsesUpdateRagfixResponse({responseId, ragfix: response.data}));

  }
  useEffect(() => {
    if (responses.currentResponseIndex !== -1) {
      const test = responses.responses[responses.currentResponseIndex]?.ragfix;
      if (test) return;
      getRagFixResponse(responses.responses[responses.currentResponseIndex].id)
    }
  })
  if (responses.currentResponseIndex === -1 ) return (<></>)
  const curResponse = responses.responses[responses.currentResponseIndex];
  
  return (
    <div className='RAGFixViewer'>
      <h2 className='RAGFixViewer__title'>RAGFix</h2>
      {curResponse?.ragfix?.ragfixResponses?.length > 0 && <div className="RAGFixViewer__ragfix-results-container">
        {curResponse.ragfix.ragfixResponses.map(rr => {
          return (
              <div key={rr.id}>
                <div className="RAGFixViewer__query">{rr.query}</div>
                <div className="RAGFixViewer__response">{rr.reconstituted}</div>
                <div 
                  className={activeButton === rr.id ? "RAGFixViewer__button RAGFixViewer__button--active" : 'RAGFixViewer__button'}
                  onClick={() => {
                    if (activeButton === rr.id) return setActiveButton('');
                    setActiveButton(rr.id);
                  }}
                >
                  Ground Truth
                </div>
              </div>
          )
        })}
       </div>
      }
    </div>
  )
}

export default RAGFixViewer