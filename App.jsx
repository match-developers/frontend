import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import ForgotPassword from './screens/ForgotPassword';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name ="Home" component={Home}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Signup" component={Signup}/>
          <Stack.Screen name="ForgotPassword" component = {ForgotPassword}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
