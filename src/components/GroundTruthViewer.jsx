import { useDispatch, useSelector } from 'react-redux';
import './GroundTruthViewer.scss';
import React from 'react'
import Error from './Error';
import { groundTruthSet } from '../store/sliceGroundTruth';
import { v4 as uuidv4 } from 'uuid';

function GroundTruthViewer() {
  const responses = useSelector(state => state.responses);
  const groundTruth = useSelector(state => state.groundTruth);
  const dispatch = useDispatch();

  if (responses.currentResponseIndex === -1) return (<></>);

  const curResponse = responses.responses[responses.currentResponseIndex];
  const passages = curResponse.passages;
  const handleClick = () => {
    dispatch(groundTruthSet({
      source: groundTruth.source === '' ? 'Passages' : '',
    }))
  }

  console.log('ground truth source', groundTruth);
  return(
    <div className='GroundTruthViewer'>
      <div className="GroundTruthViewer__button">{groundTruth.source === '' ? 'Errors' : 'Passages'}</div>
      {groundTruth.source === '' && <Error meta={curResponse.meta}/>}
    </div>
  );

}

export default GroundTruthViewer