import {useCallback} from 'react';
import {toggleTheme} from '../redux/slices/theme-slice';
import {useStoreDispatch, useStoreSelector} from '../redux/store';

export default function useTheme() {
  const dispatch = useStoreDispatch();
  const theme = useStoreSelector(state => state.themeSlice.theme);
  const themeToggler = useCallback(() => {
    dispatch(toggleTheme());
  }, [dispatch]);

  return {theme, themeToggler};
}
