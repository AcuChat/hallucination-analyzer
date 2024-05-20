import { useSelector } from 'react-redux';
import './RAGFixViewer.scss';
import React, { useEffect } from 'react'
import axios from 'axios';

function RAGFixViewer() {
  const responses = useSelector(state => state.responses);
  const backend = useSelector(state => state.backend);
  const models = useSelector(state => state.models);

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
      {

      }
    </div>
  )
}

export default RAGFixViewer