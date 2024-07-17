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
  const passages = JSON.parse(curResponse.passages);
  const handleClick = () => {
    console.log('handleClick', groundTruth.source)
    dispatch(groundTruthSet({
      source: groundTruth.source === '' ? 'Passages' : '',
    }))
  }

  console.log('ground truth source', curResponse);
  return(
    <div className='GroundTruthViewer'>
      <div className="GroundTruthViewer__button" onClick={handleClick}>{groundTruth.source === '' ? 'Errors' : 'Passages'}</div>
      {groundTruth.source === '' && <Error meta={curResponse.meta}/>}
      {groundTruth.source !== '' && <div className='GroundTruthViewer__passages'>
          {passages.map((p, index) => {
            return (
              <div key={"id" + curResponse.id + "_" + index} className='GroundTruthViewer__passage'>
                {p.replaceAll("\n", "<br />")}
              </div>
            )
          })}
        </div>}
    </div>
  );

}

export default GroundTruthViewer