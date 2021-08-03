import { Field, selectFields } from './reducers/fieldsReducer';
import { useAppSelector } from './hooks';

/* istanbul ignore next */
export const useSelectFields = (): Field[] => {
  const fields: Field[] = useAppSelector(selectFields);
  return fields;
};
