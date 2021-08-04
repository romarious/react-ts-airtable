import Airtable = require('airtable');
import {
  AIRTABLE_API_KEY,
  AIRTABLE_BASE_ID,
  AIRTABLE_NAME
} from '../constants';

export const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(
  AIRTABLE_BASE_ID
);

export let currentRecordId: string = '';

export type FieldRecord = {
  Title: string;
  Description: string;
  Notes: string;
  Budget: number;
};

export const createRecord = async (fields: FieldRecord): Promise<number> => {
  const [record] = await base(AIRTABLE_NAME).create({ ...fields });
  console.log(record);
  return record.id;
};

export const updateRecord = (fields: FieldRecord) => {
  const res = base(AIRTABLE_NAME).update(currentRecordId, { ...fields });
};

export const retrieveFormulaField = async () => {
  const doubleBudget = await base(AIRTABLE_NAME).find(currentRecordId);
  return;
};
