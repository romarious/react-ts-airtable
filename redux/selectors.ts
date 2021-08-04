import { useAppSelector } from './hooks';
import { Field, fieldsSelector } from './reducers/fieldsReducer';

/* istanbul ignore next */
export const useSelectFields = (): Field[] => {
  const fieldData: Field[] = useAppSelector(fieldsSelector);
  return fieldData;
};
