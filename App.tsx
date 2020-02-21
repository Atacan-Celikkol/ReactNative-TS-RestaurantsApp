import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import { navigationRef } from './RootNavigation';
import BusinessDetailScreen from './screens/BusinessDetailScreen';
import SearchScreen from './screens/SearchScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchScreen} options={{headerShown:false}}/>
        <Stack.Screen name="BusinessDetails" component={BusinessDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}