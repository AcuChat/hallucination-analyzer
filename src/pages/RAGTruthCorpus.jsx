import './RAGTruthCorpus.scss';
import React from 'react'
import AdminControls from '../components/AdminControls';
import ModelSelector from '../components/ModelSelector';
import LabelsSelector from '../components/LabelsSelector';
import RAGTruthViewer from '../components/RAGTruthViewer';
import RAGFixViewer from '../components/RAGFixViewer';
import GroundTruthViewer from '../components/GroundTruthViewer';
import Prompts from '../components/Prompts';

function RAGTruthCorpus() {
  return (
    <div className='RAGTruthCorpus'>
      <h1 className="RAGTruthCorpus__title">RAGTruth Corpus</h1>
      <div className="RAGTruthCorpus__corpus-info">From <a href='https://arxiv.org/html/2401.00396v1' target="_blank">RAGTruth Study</a></div>
      <AdminControls />
      <ModelSelector />
      <LabelsSelector />
      <h2 className="RAGTruthCorpus__subtitle">Response ID: </h2>
      <Prompts />
      <div className="RAGTruthCorpus__responses-container">
        <RAGTruthViewer />
        <RAGFixViewer />
      </div>
      <GroundTruthViewer />
    </div>
  )
}

export default RAGTruthCorpus