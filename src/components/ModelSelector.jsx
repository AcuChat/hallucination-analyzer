import { useDispatch, useSelector } from 'react-redux';
import './ModelSelector.scss';

import React from 'react';
import { modelsSetModel } from '../store/sliceModels';



function ModelSelector() {
  const models = useSelector(state => state.models);
  console.log('models', models)
  const dispatch = useDispatch();
  return (
    <div className='ModelSelector'>
      <select name="" id="" value={models.curModel} onChange={(e) => dispatch(modelsSetModel(e.target.value))}>
        {models?.availableModels?.map(model => {
          return (
            <option key={model} value={model}>{model}</option>
          )
        })}
      </select>

    </div>
  )
}

export default ModelSelector