import './RAGTruthCorpus.scss';
import React, { useEffect } from 'react'
import AdminControls from '../components/AdminControls';
import ModelSelector from '../components/ModelSelector';
import LabelsSelector from '../components/LabelsSelector';
import RAGTruthViewer from '../components/RAGTruthViewer';
import RAGFixViewer from '../components/RAGFixViewer';
import GroundTruthViewer from '../components/GroundTruthViewer';
import Prompts from '../components/Prompts';
import { useDispatch, useSelector } from 'react-redux';
import { responsesSetResponses } from '../store/sliceResponses';
import axios from 'axios';

function RAGTruthCorpus() {
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
  

  return (
    <div className='RAGTruthCorpus'>
      <h1 className="RAGTruthCorpus__title">RAGTruth Corpus</h1>
      <div className="RAGTruthCorpus__corpus-info">Source: <a href='https://arxiv.org/html/2401.00396v1' target="_blank">RAGTruth Study</a></div>
      <AdminControls />
      <ModelSelector />
      <LabelsSelector />
      <h2 className="RAGTruthCorpus__response-id">Response ID: {responses.currentResponseIndex > -1 ? responses.responses[responses.currentResponseIndex]?.id : ''} </h2>
      {/* <Prompts /> */}
      <div className="RAGTruthCorpus__responses-container">
        <RAGTruthViewer />
        <RAGFixViewer />
      </div>
      <GroundTruthViewer />
    </div>
  )
}

export default RAGTruthCorpus