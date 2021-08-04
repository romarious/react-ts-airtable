import { configureStore } from '@reduxjs/toolkit';
import fieldsReducer, { State as FieldsState } from './reducers/fieldsReducer';

const store = configureStore({
  reducer: fieldsReducer
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
