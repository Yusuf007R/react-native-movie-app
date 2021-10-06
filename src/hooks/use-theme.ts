import {useCallback} from 'react';
import {toggleTheme} from '../redux/slices/theme-slice';
import {useStoreDispatch} from '../redux/store';

export default function useTheme() {
  const dispatch = useStoreDispatch();

  const themeToggler = useCallback(() => {
    dispatch(toggleTheme());
  }, [dispatch]);

  return themeToggler;
}
