import './Acurai.scss';
import React from 'react'
import AdminControls from '../components/AdminControls';
import ModelSelector from '../components/ModelSelector';
import LabelsSelector from '../components/LabelsSelector';
import RAGTruthViewer from '../components/RAGTruthViewer';
import RAGFixViewer from '../components/RAGFixViewer';
import GroundTruthViewer from '../components/GroundTruthViewer';

function Acurai() {
  return (
    <div className='Acurai'>
      <h1 className="Acurai__title">Acurai</h1>
      <AdminControls />
      <ModelSelector />
      <LabelsSelector />
      <h2 className="Acurai__subtitle">Response ID: </h2>      
      <div className="Acurai__responses-container">
        <RAGTruthViewer />
        <RAGFixViewer />
      </div>
      <GroundTruthViewer />
    </div>
  )
}

export default Acurai