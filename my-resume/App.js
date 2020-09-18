import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ResumeFromScreens from './screens/ResumeFrom'
import ResumeDetailScreen from './screens/ResumeDetail'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ResumeFrom" options={{title :'Resume Form'}} component={ResumeFromScreens} />
        <Stack.Screen name="ResumeDetail" options={{title :'Resume Detail'}} component={ResumeDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;