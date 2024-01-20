import {View, Text, Button, ImageBackground} from "react-native";

export default function Register({navigation}) {
  return (
    <View>
      <Text style={{textAlign:'center', paddingTop:300}}>Register</Text>
      <Button 
      title="Go Home" 
      onPress={() => navigation.navigate("Home")}
      />
      <Button 
      title="Go to Login" 
      onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
}

