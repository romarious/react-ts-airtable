import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createRecord, FieldRecord } from '../../Airtable/project';
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

// export const createFieldRecord = createAsyncThunk(
//   'fields/createRecord',
//   async (_, { dispatch, getState }) => {
//     const state = getState();
//     return await createRecord({
//       ...getNewRecord(state.fields)
//     });
//   }
// );

export const getNewRecord = (state: State): FieldRecord => {
  const record: FieldRecord = {
    Title: '',
    Description: '',
    Notes: '',
    Budget: 0
  };
  state.forEach(field => {
    if (field.name !== 'Double Budget') {
      record[field.name] = field.value;
    }
  });
  return record;
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
      return state;
    },
    saveFields: state => {
      return state;
    },
    createFieldRecord: state => {
      const record = createRecord(getNewRecord(state));
    }
  }
  // extraReducers: builder => {
  //   builder.addCase(createFieldRecord.fulfilled, (state, action) => {
  //     console.log(state, action);
  //   });
  // }
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

export const {
  setNumberFieldValue,
  setTextFieldValue,
  setDoubleBudgetValue,
  saveFields,
  createFieldRecord
} = fieldsSlice.actions;

export default fieldsSlice.reducer;
