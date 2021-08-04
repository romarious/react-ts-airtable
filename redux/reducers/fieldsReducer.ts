import {
  bindActionCreators,
  createAsyncThunk,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';
import {
  base,
  createRecord,
  currentRecordId,
  FieldRecord,
  retrieveFormulaField,
  updateRecord
} from '../../Airtable/airtable';
import { AIRTABLE_NAME } from '../../constants';
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

export type State = {
  currentFieldId: string;
  fields: Field[];
};

export const initialState: State = {
  currentFieldId: '',
  fields: [
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
  ]
};

const setFieldValue = (
  state,
  action: PayloadAction<NumberFieldPayload | TextFieldPayload>
) => {
  state.fields.forEach(field => {
    if (field.id === action.payload.fieldId) {
      field.value = action.payload.value;
    }
  });
};

export const getNewRecord = (state: State): FieldRecord => {
  const record: FieldRecord = {
    Title: '',
    Description: '',
    Notes: '',
    Budget: 0
  };
  state.fields.forEach(field => {
    if (field.name !== 'Double Budget') {
      record[field.name] = field.value;
    }
  });
  return record;
};

export const createFieldRecord = createAsyncThunk<{ state: RootState }>(
  'fields/createRecord',
  async (_, { getState, dispatch }): Promise<void> => {
    const newRecord = getNewRecord(getState().root);
    const response = await createRecord(newRecord);
    dispatch(getDoubleBudgetValue());
    console.log(response);
  }
);

export const getDoubleBudgetValue = createAsyncThunk(
  'fields/setDoubleBudget',
  async (_, { dispatch }): Promise<void> => {
    const data = await base(AIRTABLE_NAME).find(currentRecordId, function(
      err,
      record
    ) {
      if (err) {
        console.error(err);
        return;
      }
      dispatch(setDoubleBudget(record.get('Double Budget')));
    });
  }
);

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
    saveFields: state => {
      updateRecord(getNewRecord(state));
      retrieveFormulaField();
    },
    setDoubleBudget: (state, action) => {
      setFieldValue(state, {
        ...action,
        payload: { fieldId: 'double_budget', value: action.payload }
      });
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

export const selectFields = (state: RootState): Field[] => state.root.fields;

export const {
  setNumberFieldValue,
  setTextFieldValue,
  saveFields,
  setDoubleBudget
} = fieldsSlice.actions;

export default fieldsSlice.reducer;
