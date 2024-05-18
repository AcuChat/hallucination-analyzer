import { configureStore } from '@reduxjs/toolkit';

import modelsReducer from './sliceModels';
import labelsReducer from './sliceLabels';

export const store = configureStore({ 
    reducer: {
      models: modelsReducer,
      labels: labelsReducer
    }
});

export default store