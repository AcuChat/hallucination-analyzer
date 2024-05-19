import { configureStore } from '@reduxjs/toolkit';

import modelsReducer from './sliceModels';
import labelsReducer from './sliceLabels';
import responsesReducer from './sliceResponses';
import groundTruthReducer from './sliceGroundTruth';
import backendReducer from './sliceBackend';

export const store = configureStore({ 
    reducer: {
      models: modelsReducer,
      labels: labelsReducer,
      responses: responsesReducer,
      groundTruth: groundTruthReducer,
      backend: backendReducer
    }
});

export default store