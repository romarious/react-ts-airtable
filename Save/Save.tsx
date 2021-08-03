import * as React from 'react';
import { useDispatch } from 'react-redux';
import { saveFields } from '../redux/actions';

const Save = () => {
  const dispatch = useDispatch();
  
  const saveForm = (event: React.MouseEvent) => {
    dispatch(saveFields());
  };

  return (
    <div>
      <button onClick={saveForm}> Save </button>
    </div>
  );
};

export default Save;
