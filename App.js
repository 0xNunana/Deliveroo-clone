import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen';
import 'react-native-url-polyfill/auto' // necessary for url errors
import RestaurantScreen from './src/screens/RestaurantScreen';
import { Provider } from 'react-redux';
import { store } from "./store"
import BasketScreen from './src/screens/BasketScreen';
import PreparingOrderScreen from './src/screens/PreparingOrderScreen';
import DeliveryScreen from './src/screens/DeliveryScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name='Restaurant' component={RestaurantScreen} options={{ headerShown: false }} />
          <Stack.Screen name='Basket' component={BasketScreen} options={{ headerShown: false, presentation: 'modal' }} />
          <Stack.Screen name='Preparing Order' component={PreparingOrderScreen} options={{ headerShown: false, presentation: "fullScreenModal" }} />
          <Stack.Screen name='Delivery' component={DeliveryScreen} options={{ headerShown: false, presentation: "fullScreenModal" }} />
        </Stack.Navigator>

      </Provider>



    </NavigationContainer>

  );
}

