import * as React from 'react';
import FieldRenderer from './FieldRenderer';
import { useAppDispatch } from './redux/hooks';
import {
  createFieldRecord,
  getDoubleBudgetValue
} from './redux/reducers/fieldsReducer';
import { useSelectFields } from './redux/selectors';
import Save from './Save/Save';
import './style.css';

const App = () => {
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
      <Save />
    </div>
  );
};
export default App;
