import * as React from 'react';
import { useDispatch } from 'react-redux';
import { createFieldRecord } from '../redux/reducers/fieldsReducer';

const Save = () => {
  const dispatch = useDispatch();

  const saveForm = (event: React.MouseEvent) => {
    dispatch(createFieldRecord());
  };

  return (
    <div>
      <button onClick={saveForm}> Save </button>
    </div>
  );
};

export default Save;
