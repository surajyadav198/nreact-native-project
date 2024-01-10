import { DefaultTheme } from 'react-native-paper'

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#000000',
    primary: '#560CCE',
    secondary: '#414757',
    error: '#f13a59',
  },
}

import * as React from 'react';
import { Button, View, Text,StyleSheet,TouchableOpacity,Fl } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

 const data = [
    {key: 'credit-card', title:'Credit Cards'},
    {key: 'star', title:'Reward points'},
    {key: 'heart', title:'Festive Offers'},
    {key: 'money', title:'Convert to EMI'},
  ]

function HomeScreen({ navigation }) {

    const renderItem = {{ item }} => (
      <TouchableOpacity></TouchableOpacity>
    );

  return (
    <View >
    <View style={styles.view1}>
      <Text >Total Account Balance</Text>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>N.A</Text>
     </View>
     <View style={styles.view2}>
      <Text>Keep track of all your bank {'\n'}Account at one place</Text>
      </View>
      <Text style={styles.qlink}>QUICK LINKS</Text>

      <View style={styles.view3}>
      <TouchableOpacity>
      <View style={{alignItems:'center', paddingRight:5}}>
        <Icon name="credit-card" size={25} color="red" />
        <Text>Credit Cards</Text>
      </View >
      </TouchableOpacity>
      
      <TouchableOpacity>
      <View style={{alignItems:'center', paddingRight:5}}>
        <Icon name="star" size={25} color="red" />
        <Text>Reward Points</Text>
      </View>
      </TouchableOpacity>
      
      <TouchableOpacity>
      <View style={{alignItems:'center', paddingRight:5}}>
        <Icon name="heart" size={25} color="red" />
        <Text>Festive Offers</Text>
      </View>
      </TouchableOpacity>
      
       <TouchableOpacity>
      <View style={{alignItems:'center'}}>
        <Icon name="money" size={25} color="red" />
        <Text>Convert to EMI</Text>
      </View>
      </TouchableOpacity>
      </View>

    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
view1 :{
  alignItems: 'center',
  paddingTop: 10,
  paddingBottom: 10,
  fontWeight: 'bold',
  backgroundColor: 'white',
  shadowColor: 'black',
  shadowOffset: {width: 0, height: 1},
  shadowOpacity: 0.3,
  shadowRadius: 4,
  elevation: 4,
},
view2: {
  padding: 10,
  marginTop: 25,
  marginLeft:15,
  marginRight:15,
  borderRadius: 6,
  backgroundColor: '#FFB6C1',
  alignItems: 'center',
},
qlink: {
color: 'black',
marginTop:10,
marginLeft:10,
paddingBottom:5,
fontWeight:'bold',
fontSize:15,
borderBottomWidth: 1,
borderColor: 'balck',
shadowOpacity:0.3,
},
view3: {
  flexDirection:'row',
   alignItems:'center',
   paddingTop:20,
   paddingLeft:15,

},

});
export default App;
