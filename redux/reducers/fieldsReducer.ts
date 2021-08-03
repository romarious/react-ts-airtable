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
    }
  | {
      type: 'formula';
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
  },
  {
    type: 'formula',
    id: `double_budget`,
    name: `Double Budget`,
    value: 0
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

const setDoubleBudget = (state, action: any) => {
  state.forEach(field => {
    if (field.id === 'double_budget') {
      field.value = action.payload.value * 2;
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
    },
    setDoubleBudgetValue: state => {
      const { value } = state.filter(field => field.id === 'budget')[0];
      if (typeof value === 'number') {
        setDoubleBudget(state, {
          payload: { value }
        });
      }
    },
    saveFields: state => {
      return state;
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

export type DoubleFieldPayload = {
  value: number;
};

export const selectFields = (state: RootState): Field[] => state.fields;

export const {
  setNumberFieldValue,
  setTextFieldValue,
  setDoubleBudgetValue,
  saveFields
} = fieldsSlice.actions;

export default fieldsSlice.reducer;
