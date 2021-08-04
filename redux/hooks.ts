import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store';
import { Field, fieldsSelector } from './reducers/fieldsReducer';

/* istanbul ignore next */

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useSelectFields = (): Field[] => {
  const fieldData: Field[] = useAppSelector(fieldsSelector);
  return fieldData;
};