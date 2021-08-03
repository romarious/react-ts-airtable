import { configureStore } from '@reduxjs/toolkit';
import fieldsReducer, { State as FieldsState } from './reducers/fieldsReducer';

export type GlobalState = {
  fields: FieldsState;
};

const store = configureStore({
  reducer: {
    root: fieldsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
