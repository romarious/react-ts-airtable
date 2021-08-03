import * as React from 'react';
import FieldRenderer from './FieldRenderer';
import { useSelectFields } from './redux/selectors';
import './style.css';

const App = () => {
  const fields = useSelectFields();
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {fields.map(field => (
        <FieldRenderer field={field} />
      ))}
    </div>
  );
};
export default App;
