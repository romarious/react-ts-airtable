import * as React from 'react';
import { useDispatch } from 'react-redux';
import { getFromSubmitions } from '../Airtable/project';
import { setDoubleBudgetValue } from '../redux/reducers/fieldsReducer';

const Save = () => {
  const dispatch = useDispatch();

  const saveForm = (event: React.MouseEvent) => {
    const call = () => {
      const res = getFromSubmitions();
    };
    const data = call();
    console.log(data);
    dispatch(setDoubleBudgetValue());
  };

  return (
    <div>
      <button onClick={saveForm}> Save </button>
    </div>
  );
};

export default Save;
