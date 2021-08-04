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

export const getFormSubmitions = () => {
  const forms = base(AIRTABLE_NAME)
    .select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 5,
      view: 'Grid view'
    })
    .eachPage(
      function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
          console.log('Retrieved', record.fields);
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
      }
    );
  return forms;
};

export type FieldRecord = {
  Title: string;
  Description: string;
  Notes: string;
  Budget: number;
};

export const createRecord = async (fields: FieldRecord) => {
  await base(AIRTABLE_NAME).create({ ...fields }, function(err, record) {
    if (err) {
      console.error(err);
      return;
    }
    currentRecordId = record.id;
    return currentRecordId;
  });
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
