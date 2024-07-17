import { useDispatch, useSelector } from 'react-redux';
import './RAGTruthViewer.scss';
import React, { useEffect } from 'react'
import { groundTruthSet, groundTruthSetErrors } from '../store/sliceGroundTruth';
import lodash from 'lodash';


function RAGTruthViewer() {
  const responses = useSelector(state => state.responses);
  const groundTruth = useSelector(state => state.groundTruth);
  const labels = useSelector(state => state.labels);



  const dispatch = useDispatch();

  let errors = [];
  useEffect(() => {
   dispatch(groundTruthSetErrors(errors))
  })


  if (responses.currentResponseIndex === -1 ) return (<></>)
  
  const curResponse = responses.responses[responses.currentResponseIndex];
  let response = curResponse.response;
  errors = lodash.cloneDeep(curResponse.labels);

  for (let i = 0; i < errors.length; ++i) {
    const meta = errors[i].meta.split("\n");
    if (meta.length < 3) {
      errors.slice(0, i - 1);
      break;
    }
    errors[i].type = meta[0].toLowerCase();
    errors[i].original = meta[1].substring(10);
    errors[i].generated = meta[2].substring(11);
    errors[i].origSize = errors[i].original.length;
    errors[i].generatedSize = errors[i].generated.length;
    errors[i].color = labels.labels.find(label => label.name.toLowerCase() === meta[0].toLowerCase())?.color;
  }

  // console.log('errors', errors);
  errors.sort((a, b) => {errors
    return a.start - b.start;
  })

  
  let newResponse = response.substring(0, errors[0].start);
  errors.forEach((error, index) => {
    newResponse += `<span style="background-color: ${error.color}">${response.substring(error.start, error.end)}</span>`;
    if (index === errors.length - 1) newResponse += response.substring(error.end);
    else newResponse += error[index+1]?.start ? response.substring(error.end, error[index+1].start) : response.substring(error.end);
  })


  const passages = curResponse.source.source_info.passages.split("\n\n");
  passages.pop();

  const updateGroundTruth = (errors = []) => {
    //dispatch(groundTruthSetErrors(errors))
  }


  return (
    <div className='RAGTruthViewer'>
     
      {/* <div className="RAGTruthViewer__error">Error</div> */}
      <h2 className='RAGTruthViewer__title'>RAGTruth</h2>
      <div className="RAGTruthViewer__prompt">{curResponse.source.source_info.question}</div>
      <div className="RAGTruthViewer__response" dangerouslySetInnerHTML={{__html: newResponse.replaceAll("\n", "<br />")}}>


      </div>
      
    </div>
  )
}

export default RAGTruthViewer