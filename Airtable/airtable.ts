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

export const createRecord = async (fields: FieldRecord) => {
  const res = await base(AIRTABLE_NAME).create({ ...fields }, function(
    err,
    record
  ) {
    if (err) {
      console.error(err);
      return;
    }
    currentRecordId = record.id;
  });
  return res;
};

export const updateRecord = (fields: FieldRecord) => {
  base(AIRTABLE_NAME).update(currentRecordId, { ...fields }, function(
    err,
    record
  ) {
    if (err) {
      console.error(err);
      return;
    }
  });
};

export const retrieveFormulaField = () => {
  const bedgetDOunble = base(AIRTABLE_NAME).find(currentRecordId, function(
    err,
    record
  ) {
    if (err) {
      console.error(err);
      return;
    }
  });
};
