import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type Field =
  | {
      type: 'text';
      id: string;
      name: string;
      value: string;
    }
  | {
      type: 'number';
      id: string;
      name: string;
      value: number;
    };

export type State = Field[];

export const initialState: State = [
  {
    type: 'text',
    id: `title`,
    name: `Title`,
    value: 'some title'
  },
  {
    type: 'text',
    id: `description`,
    name: `Description`,
    value: 'some description'
  },
  {
    type: 'text',
    id: `notes`,
    name: `Notes`,
    value: 'some notes'
  },
  {
    type: 'number',
    id: `budget`,
    name: `Budget`,
    value: 40
  }
];

const setFieldValue = (
  state,
  action: PayloadAction<NumberFieldPayload | TextFieldPayload>
) => {
  state.forEach(field => {
    if (field.id === action.payload.fieldId) {
      field.value = action.payload.value;
    }
  });
};

export const fieldsSlice = createSlice({
  name: 'fields',
  initialState,
  reducers: {
    setNumberFieldValue: (state, action) => {
      setFieldValue(state, action);
    },
    setTextFieldValue: (state, action) => {
      setFieldValue(state, action);
    }
  }
});

export type TextFieldPayload = {
  fieldId: string;
  value: number;
};

export type NumberFieldPayload = {
  fieldId: string;
  value: number;
};

export const selectFields = (state: RootState): Field[] => state.fields;

export const { setNumberFieldValue, setTextFieldValue } = fieldsSlice.actions;

export default fieldsSlice.reducer;
