import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen';
import 'react-native-url-polyfill/auto' // necessary for url errors
import RestaurantScreen from './src/screens/RestaurantScreen';
import { Provider } from 'react-redux';
import { store } from "./store"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name='Restaurant' component={RestaurantScreen} options={{ headerShown: false }} />
        </Stack.Navigator>

      </Provider>



    </NavigationContainer>

  );
}

