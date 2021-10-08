import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {fetchSearchQuery} from '../../redux/slices/movies-slice';
import {useStoreDispatch} from '../../redux/store';

import {Container, StyledIcon, StyledInput} from './style';

export default function HeaderInput() {
  const [query, setQuery] = useState('');
  const dispatch = useStoreDispatch();
  const navigation = useNavigation();
  const onChangeHandler = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setQuery(e.nativeEvent.text);
  };
  const onSubmitHandler = () => {
    dispatch(fetchSearchQuery(query));
    setQuery('');
    navigation.navigate('VerticalListScreen', {text: query, type: 'search'});
  };
  return (
    <Container>
      <StyledIcon name="search" color="white" size={18} />
      <StyledInput
        value={query}
        onChange={onChangeHandler}
        placeholder="Search"
        placeholderTextColor="white"
        onSubmitEditing={onSubmitHandler}
        blurOnSubmit
      />
    </Container>
  );
}
