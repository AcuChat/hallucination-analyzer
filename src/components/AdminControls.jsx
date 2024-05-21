import { useDispatch, useSelector } from 'react-redux';
import './AdminControls.scss';
import React from 'react'
import axios from 'axios';
import { groundTruthReset } from '../store/sliceGroundTruth';
import { responsesUpdateRagfixResponse } from '../store/sliceResponses';
import { spinnerSet } from '../store/sliceSpinner';

function AdminControls() {
  const responses = useSelector(state => state.responses);
  const backend = useSelector(state => state.backend);
  const models = useSelector(state => state.models);
  const groundTruth = useSelector(state => state.groundTruth);

  const dispatch = useDispatch();

  const getRagFixResponse = async responseId => {
    const passages = responses.responses[responses.currentResponseIndex].source.source_info.passages.split("\n\n");
    passages.pop();

    const request = {
      url: backend + '/update-ragfix-response',
      method: 'post',
      data: {
        query: responses.responses[responses.currentResponseIndex].source.source_info.question,
        passages,
        responseId,
        model: models.curModel
      }
    }
    dispatch(groundTruthReset())
    const response = await axios(request);

    console.log('ragfix response', response.data);

    dispatch(responsesUpdateRagfixResponse({responseId, ragfix: response.data}));

  }

  if (window.location.hostname !== 'localhost') return <></>
  if (responses.currentResponseIndex < 0) return <></>

  const handleSubmit = async (responseId) => {
    dispatch(spinnerSet(true));
    try {
      await getRagFixResponse(responseId);
    } catch (err) {
      console.error(err);
    }
    dispatch(spinnerSet(false))
  }

  return (
    <div className='AdminControls'>
      <div className="AdminControls__submit-button" onClick={() => handleSubmit(responses.responses[responses.currentResponseIndex].id)}>Submit</div>
      <div className="AdminControls__verify-button">Verify</div>
      <div className="AdminControls__highlight-container">
        <div className="AdminControls__reset-button">Reset</div>
        <div className="AdminControls__checkbox-container">
          <input type="checkbox" className="AdminControls__checkbox" />
          <div className="AdminControls__checkbox-label">Highlight</div>
        </div>
      </div>
    </div>
  )
}

export default AdminControls