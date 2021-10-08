import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailScreen from '../screens/detail-screen';
import HomeScreen from '../screens/home-screen';
import VerticalListScreen from '../screens/vertical-list-screen';
import {RootStackTypes} from './navigator';

const Stack = createNativeStackNavigator<RootStackTypes>();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailScreen} />
        <Stack.Screen
          name="VerticalListScreen"
          component={VerticalListScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
