import { AIRTABLE_ENDPOINT_URL } from '../constants';

export const query = async () => {
  try {
    const result = await fetch(`${AIRTABLE_ENDPOINT_URL}/v0/BASE_ID/map/`);
    const data = await result.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
