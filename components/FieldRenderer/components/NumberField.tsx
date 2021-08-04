import * as React from 'react';
import FieldHeader from '../FieldHeader';
import { useAppDispatch } from '../../../redux/hooks';
import NumericInput = require('react-numeric-input');
import { setNumberFieldValue } from '../../../redux/reducers/fieldsReducer';

type Props = {
  fieldId: string;
  fieldName: string;
  value: number;
};

const NumberField: React.FC<Props> = (props: Props) => {
  const dispatch = useAppDispatch();

  const setValue = React.useCallback(valueAsNumber => {
    dispatch(
      setNumberFieldValue({
        fieldId: props.fieldId,
        value: valueAsNumber
      })
    );
  }, []);

  return (
    <div style={styles.container}>
      <FieldHeader name={props.fieldName} />
      <div>
        <NumericInput
          style={styles.input}
          value={props.value}
          onChange={setValue}
        />
      </div>
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

export default NumberField;
