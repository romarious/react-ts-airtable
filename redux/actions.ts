export type TextFieldPayload = {
  fieldId: string;
  value: number;
};

export type SetTextFieldValue = {
  type: 'SET_TEXT_FIELD_VALUE';
  payload: TextFieldPayload;
};

export type NumberFieldPayload = {
  fieldId: string;
  value: number;
};

export type SetNumberFieldValue = {
  type: 'SET_NUMBER_FIELD_VALUE';
  payload: NumberFieldPayload;
};

export type SaveFields = {
  type: 'SAVE_FIELDS';
};

export const saveFields = (): SaveFields => ({
  type: 'SAVE_FIELDS'
});

export type Action = SetTextFieldValue | SetNumberFieldValue | SaveFields;
