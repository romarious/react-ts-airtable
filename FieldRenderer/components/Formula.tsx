import * as React from 'react';
import FieldHeader from '../FieldHeader';
import { useAppDispatch } from '../../redux/hooks';

type Props = {
  fieldId: string;
  fieldName: string;
  value: number;
};

const Formula = (props: Props) => {
  const dispatch = useAppDispatch();

  return (
    <div style={styles.container}>
      <FieldHeader name={props.fieldName} />
      <p>{props.value}</p>
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

export default Formula;
