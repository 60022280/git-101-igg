import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MoviesList from './Screens/MoviesList';
import MovieDetail from './Screens/MovieDetail';
const Stack = createStackNavigator();
const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator 
      screenOptions={
        {
          headerStyle:{
            backgroundColor: 'black'
          },
            headerTintColor: 'white'
        }
      }>
      <Stack.Screen
        name="MoviesList"
        component={MoviesList}
        options={
          {
            title: 'Movie show time example'
          }
        }
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetail}
        options={
          {
            title: null,
            headerTruncatedBackTitle: 'กลับ'
          }
        }
      />
    </Stack.Navigator>
  </NavigationContainer>
)
// export default Navigation
export default function App() {
  return (
    <View style={styles.container}>
     <Navigation />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});