import { configureStore } from '@reduxjs/toolkit';

import modelsReducer from './sliceModels';

export const store = configureStore({ 
    reducer: {
      models: modelsReducer
    }
});

export default store