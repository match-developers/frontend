import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
          <Stack.Screen name ="Home" component={Home}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Register" component={Register}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
