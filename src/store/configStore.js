import { configureStore } from '@reduxjs/toolkit';

import modelsReducer from './sliceModels';
import labelsReducer from './sliceLabels';
import responsesReducer from './sliceResponses';

export const store = configureStore({ 
    reducer: {
      models: modelsReducer,
      labels: labelsReducer,
      responses: responsesReducer
    }
});

export default store