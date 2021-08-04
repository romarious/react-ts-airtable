import * as React from 'react';
import FieldRenderer from './FieldRenderer';
import { useAppDispatch } from './redux/hooks';
import {
  createFieldRecord,
  selectFields
} from './redux/reducers/fieldsReducer';
import Save from './Save/Save';
import './style.css';

const App = () => {
  const fields = selectFields();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(createFieldRecord());
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {fields.map(field => (
        <FieldRenderer field={field} />
      ))}
      <Save />
    </div>
  );
};
export default App;
