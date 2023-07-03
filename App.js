import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import Prop1Screen from './screens/Prop1Screen';
import Prop2Screen from './screens/Prop2Screen';
import Prop3Screen from './screens/Prop3Screen';
import MenuScreen from './screens/MenuScreen';
import BrowseScreen from './screens/BrowseScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import AboutScreen from './screens/AboutScreen';
import MapScreen from './screens/MapScreen';
import ContactScreen from './screens/ContactScreen';
import MessageScreen from './screens/MessageScreen';
import ConditionsScreen from './screens/ConditionsSceen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Prop1" component={Prop1Screen} />
        <Stack.Screen options={{ headerShown: false }} name="Prop2" component={Prop2Screen} />
        <Stack.Screen options={{ headerShown: false }} name="Prop3" component={Prop3Screen} />
        <Stack.Screen options={{ headerShown: false }} name="Menu" component={MenuScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Browse" component={BrowseScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Signup" component={SignupScreen} />
        <Stack.Screen options={{ headerShown: false }} name="About" component={AboutScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Map" component={MapScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Contact" component={ContactScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Message" component={MessageScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Conditions" component={ConditionsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
