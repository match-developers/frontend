import { NavigationContainer } from "@react-navigation/native";
import {View, Text, Button} from "react-native";

export default function Login({navigation}) {
  return (
    <View>
      <Text style={{textAlign:'center', paddingTop:300}}>Login Screen</Text>
      <Button 
      title="Go Home" 
      onPress={() => navigation.navigate("Home")}
      />
      <Button 
      title="Go to Register" 
      onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
}

