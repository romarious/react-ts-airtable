import * as React from 'react';
import FieldHeader from '../FieldHeader';
import { SetTextFieldValue } from '../../redux/actions';
import { useAppDispatch } from '../../redux/hooks';
import { setTextFieldValue } from '../../redux/reducers/fieldsReducer';

type Props = {
  fieldId: string;
  fieldName: string;
  value: string;
};

const TextField = (props: Props) => {
  const dispatch = useAppDispatch();

  const setValue = React.useCallback(e => {
    console.log('set!');
    dispatch(
      setTextFieldValue({
        fieldId: props.fieldId,
        value: e.target.value
      })
    );
  }, []);

  return (
    <div style={styles.container}>
      <FieldHeader name={props.fieldName} />
      <input style={styles.input} onChange={setValue} value={props.value} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  input: {
    width: '100%',
    border: '1px solid lightgray',
    minHeight: 24,
    borderRadius: 4,
    marginRight: 16,
    paddingLeft: 6
  }
};

export default TextField;
