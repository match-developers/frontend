import { NavigationContainer } from "@react-navigation/native";
import {View, Text, Button, ImageBackground, StyleSheet} from "react-native";
import background from '../public/images/lebronbackground.png';

export default function Home({navigation, StyleSheet}) {
    return (
    <View style={{flex:1}}>
        <ImageBackground style={styles.background} source={background}>
            <View style={styles.homeContainer}>
                <Text style={styles.homeText}>Match</Text>
                <Button 
                title="Go to Register" 
                style={styles.register}
                onPress={() => navigation.navigate("Register")}
                />
                <Button 
                title="Go to Login" 
                onPress={() => navigation.navigate("Login")}
                />
            </View>
        </ImageBackground>
    </View>
    );
}

const styles = StyleSheet.create({
    background: {
        height:'100%', 
        width:'100%', 
        resizeMode:'stretch'
    },
    homeText: {
        textAlign:'center', 
        color:'#40C7AE', 
        fontSize:40,
        paddingBottom:90,
        paddingTop:0,

    },
    homeContainer: {
        backgroundColor:'#2F2F2F', 
        marginTop:'110%', 
        width:'85%', 
        alignSelf:'center', 
        alignItems:'center', 
        borderRadius:15, 
        padding:90
    },
    register: {
        color:'#2F2F2F',
        backgroundColor:'#40C7AE'

    }
});

