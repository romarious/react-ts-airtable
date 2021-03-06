import * as React from 'react';
import { Field } from '../redux/reducers/fieldsReducer';
import TextField from './components/TextField';
import NumberField from './components/NumberField';
import Formula from '../FieldRenderer/components/Formula';

type Props = {
  field: Field;
};

const FieldRenderer: React.FC<Props> = (props: Props) => {
  const { field } = props;
  switch (field.type) {
    case 'text':
      return (
        <TextField
          fieldId={field.id}
          fieldName={field.name}
          value={field.value}
        />
      );
    case 'number':
      return (
        <NumberField
          fieldId={field.id}
          fieldName={field.name}
          value={field.value}
        />
      );
    case 'formula':
      return (
        <Formula
          fieldId={field.id}
          fieldName={field.name}
          value={field.value}
        />
      );
    default:
      throw new Error(`Unknown field type: ${field!.type}`);
  }
};

export default FieldRenderer;
