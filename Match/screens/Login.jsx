import { NavigationContainer } from "@react-navigation/native";
import {View, Text, Button} from "react-native";

export default function Login({navigation}) {
  return (
    <View>
      <Text>Login Screen</Text>
      <Button 
      title="Go to Register" 
      onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
}

