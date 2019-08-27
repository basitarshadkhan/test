import React from 'react'
import { View , Text, StyleSheet, TouchableOpacity, Image, Animated, FlatList } from 'react-native'
import Wallpaper from '../assets/images/wallpaper.jpg'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export default class ProfileComponent extends React.Component{

    renderItem = ({ item }) => (
            <Text style = {{ fontWeight:'500', fontSize:20, color:'#fff' }}>
                { item }
            </Text>
    )

    render(){
        return(
            <View style = {{ flex:1 }}>
                <Image 
                    source = { this.props.imageuri }
                    style = { styles.imageStyle }
                />
                <Text style = { styles.fullNameText }> 
                    {this.props.fullName} 
                </Text>
                <Text style = { styles.userNameText }> 
                    { this.props.username } 
                </Text>
                <View style = { styles.countryContainer }>
                    <Text style = { styles.country }>
                        Country:
                    </Text>
                    <Text style = { styles.country }>
                        { this.props.country }
                    </Text>
                </View>
                <Text  style = { styles.repositoryText }>
                    Repositories:
                </Text>
                <AnimatedFlatList
                    style={{
                    width:'90%',
                    marginLeft:'5%'
                    }}
                    data={this.props.repositories}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => String(index)}
                    contentContainerStyle={{paddingTop: 0 }}
                    scrollIndicatorInsets={{top: 0 /*paddingHeight*/}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageStyle:{
        alignSelf:'center', 
        borderRadius:25, 
        width:130, 
        height:130, 
        marginTop:70
    },
    fullNameText:{
        alignSelf:'center', 
        fontWeight:'500', 
        fontSize:30, 
        marginTop:10 , 
        color:'#fff'
    },
    userNameText:{
        alignSelf:'center', 
        fontWeight:'400', 
        fontStyle:'italic', 
        fontSize:22, 
        marginTop:6 , 
        color:'#fff'
    },
    countryContainer:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignSelf:'stretch', 
        marginTop:10, 
        padding:8
    },
    country:{
        fontWeight:'500', 
        fontSize:20, 
        color:'#fff'
    },
    repositoryText:{
        fontWeight:'500', 
        fontSize:20, 
        color:'#fff', 
        padding:8
    }
})