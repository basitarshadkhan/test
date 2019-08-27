import React from 'react'
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native'
import Wallpaper from '../assets/images/wallpaper.jpg'

export default class LoginScreen extends React.Component{

    static navigationOptions = {
        header : null   
     };
    render(){
        return(
        <ImageBackground source = { Wallpaper }
            style = {{ flex:1 }}
        >
            <View style = {{ flex:1 }}>
                <Text style = { styles.appText }>
                    8BitFriends
                </Text>

                <TouchableOpacity 
                    style = {[ styles.buttonContainer, { top:350 } ]}
                    onPress = { () => this.props.navigation.navigate('DiscoverScreen') }
                >
                    <Text style = { styles.buttonText }>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style = {[ styles.buttonContainer, { top:350 } ]}
                    onPress = { () => this.props.navigation.navigate('DiscoverScreen') }
                >
                    <Text style = { styles.buttonText }>
                        SignIn
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    appText:{
        alignSelf:'center', 
        position:'absolute', 
        top:200, 
        fontStyle:'italic', 
        fontWeight:'600', 
        fontSize:40
    },
    buttonContainer:{
        backgroundColor:'#ddd', 
        alignSelf:'center', 
        justifyContent:'center', 
        alignItems:'center', 
        borderColor:'#ddd', 
        borderWidth:0.5, 
        position:'absolute',
        width:'60%', 
        height:'6%' 
    },
    buttonText:{
        color:'#fff', fontSize:16
    }
})