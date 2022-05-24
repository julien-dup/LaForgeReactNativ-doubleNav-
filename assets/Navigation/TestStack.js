import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RealisationsScreen from '../Screen/RealisationsScreen';
import Type1 from '../components/Type1Component'
import Type2 from '../components/Type2Component'
import Type3 from '../components/Type3Component'

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={RealisationsScreen}
          options= {{headerShown: false}}
          
        />
        <Stack.Screen name="coutellerie" component={Type1} options= {{headerShown: false}} />
        <Stack.Screen name="bijouterie" component={Type2} options= {{headerShown: false}}/>
        <Stack.Screen name="accessoires" component={Type3} options= {{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack