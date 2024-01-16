import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View display='flex'>
        <View style={{backgroundColor:'white', alignItems:'center', marginTop:100}}>
          <Text style={{color:"red",fontSize:50, textAlignVertical:"top"}}>Match</Text>
          <Text style={{color:"red"}}>Play sports in your area like a pro</Text>
          <StatusBar style="auto" />
        </View>
        <View style={{alignItems:'center',backgroundColor: 'white', marginTop:500}}>
          <TouchableOpacity style={{paddingLeft:25, paddingRight:25, paddingTop:10, paddingBottom:10, margin:10,backgroundColor:"grey", borderRadius:5}}>
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{paddingLeft:25, paddingRight:25, paddingTop:10, paddingBottom:10,backgroundColor:"grey", borderRadius:5}}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

