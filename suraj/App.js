import * as React from 'react';
import { Text, View } from 'react-native';
import LoginScreen from './LoginScreen';
import DetailScreen from './DetailScreen';
import NewScreen from './NewScreen';
import HomeScreen from './HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


 const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer initialRouteName="Login">
      <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Details" component={DetailScreen} />
      <Stack.Screen name="New" component={NewScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
 }

 export default App;