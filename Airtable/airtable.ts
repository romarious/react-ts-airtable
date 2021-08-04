import Airtable = require('airtable');
import {
  AIRTABLE_API_KEY,
  AIRTABLE_BASE_ID,
  AIRTABLE_NAME
} from '../constants';

export const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(
  AIRTABLE_BASE_ID
);

export type FieldRecord = {
  Title: string;
  Description: string;
  Notes: string;
  Budget: number;
};

export type CreatedFieldRecord = {
  recordId: string;
  fields: FieldRecord;
};

export const createRecord = async (
  fields: FieldRecord
): Promise<CreatedFieldRecord> => {
  const record = await base(AIRTABLE_NAME).create({ ...fields });
  return {
    recordId: record.id,
    fields: record.fields
  };
};

export const updateRecord = async (
  fields: FieldRecord,
  currentRecordId
): Promise<FieldRecord> => {
  const record = await base(AIRTABLE_NAME).update(currentRecordId, {
    ...fields
  });
  return record.fields;
};
