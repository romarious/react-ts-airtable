import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  Action,
  NumberFieldPayload,
  SetNumberFieldValue,
  TextFieldPayload
} from '../actions';

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

/* istanbul ignore next */
const fieldsReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'SET_NUMBER_FIELD_VALUE':
    case 'SET_TEXT_FIELD_VALUE': {
      return state.map(field => {
        if (field.id === action.fieldId) {
          return {
            ...field,
            value: action.value
          };
        } else {
          return field;
        }
      });
    }
    case 'SAVE_FIELDS':

    default:
      return state;
  }
};

const setFieldValue = (
  state,
  action: PayloadAction<NumberFieldPayload | TextFieldPayload>
) => {
  return state.map(field => {
    if (field.id === action.payload.fieldId) {
      return {
        ...field,
        value: action.payload.value
      };
    } else {
      return field;
    }
  });
};

export const counterSlice = createSlice({
  name: 'fields',
  initialState,
  reducers: {
    setNumberFieldValue: (state, action) => setFieldValue(state, action),
    setTextFieldValue: (state, action) => setFieldValue(state, action)
  }
});

export default fieldsReducer;
