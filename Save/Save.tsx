import * as React from 'react';
import { useDispatch } from 'react-redux';
import { setDoubleBudgetValue } from '../redux/reducers/fieldsReducer';

const Save = () => {
  const dispatch = useDispatch();

  const saveForm = (event: React.MouseEvent) => {
    dispatch(setDoubleBudgetValue());
  };

  return (
    <div>
      <button onClick={saveForm}> Save </button>
    </div>
  );
};

export default Save;
