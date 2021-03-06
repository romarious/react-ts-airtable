import * as React from 'react';
import FieldRenderer from './FieldRenderer';
import { useAppDispatch } from '../redux/hooks';
import { createFieldRecord } from '../redux/reducers/fieldsReducer';
import { useSelectFields } from '../redux/hooks';
import SaveButton from './SaveButton';
import '../style.css';

const App: React.FC = () => {
  const fields = useSelectFields();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(createFieldRecord());
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {fields.map(field => (
        <FieldRenderer field={field} />
      ))}
      <SaveButton />
    </div>
  );
};
export default App;
