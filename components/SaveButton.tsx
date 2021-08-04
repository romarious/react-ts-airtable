import * as React from 'react';
import { useDispatch } from 'react-redux';
import { saveFields } from '../redux/reducers/fieldsReducer';

const SaveButton: React.FC = () => {
  const dispatch = useDispatch();

  const saveForm = (event: React.MouseEvent) => {
    dispatch(saveFields());
  };

  return (
    <div style={styles.buttonContainer}>
      <button style={styles.button} onClick={saveForm}>
        {' '}
        Save{' '}
      </button>
    </div>
  );
};

const styles = {
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#98ed98',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '15px',
    outline: 'none',
    color: '454745',
    cursor: 'pointer'
  }
};

export default SaveButton;
