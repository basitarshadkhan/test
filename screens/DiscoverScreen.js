import React from 'react'
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, TextInput, AsyncStorage } from 'react-native'
import Wallpaper from '../assets/images/wallpaper.jpg'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

//profileComponent
import GitProfile from '../component/profileComponent'


class DiscoverScreen extends React.Component{

    static navigationOptions = {
        headerTransparent : true
    }

    constructor(props){
        super(props);
        this.state = {
            searchValue : '',
            useravailable:false,
            userData:{},
            favs:[]
        }
    }
    searchGit( username ){
        this.props.getsuer( username )
        .then((response) => {
            console.log('reponse', JSON.stringify(response))
            this.setState({ userData: JSON.stringify(response), useravailable:true })
        })
        .catch((error) => {
            console.log('error')
        })
    }

    saveUser(){
        if(useravailable == true){
            AsyncStorage
            .getItem('key')
            .then(favs => {
                favs = favs == null ? [] : JSON.parse(favs)

                favs.push(this.state.userData)

                return AsyncStorage.setItem('key', JSON.stringify(favs))
            })
        }
    }

    render(){
        return(
        <ImageBackground source = { Wallpaper }
        style = {{ flex:1 }}>
            <Text style = { styles.searchText }>
                Search Git users here:
            </Text>
            <TextInput
                value = { this.state.searchValue }
                onChangeText = { (value) => this.setState({ searchValue : value },
                    () => searchGit( this.state.searchValue ) ) }
                style = { styles.textInput }
            />
            { this.state.useravailable?
                (<GitProfile
                    imageuri = { this.userData.avatarUrl }
                    fullName = { this.userData.name }
                    username = { this.userData.login }
                    country = { this.userData.country }
                    repositories = { this.userData.repositories.name }
                />):null
            }
            <TouchableOpacity 
                        style = { styles.buttonContainer }
                        onPress = { () => this.saveUser }
                    >
                        <Text style = { styles.btnText }>
                            Favourite
                        </Text>
            </TouchableOpacity>
        </ImageBackground>
        );
    }
}

export default graphql(
    gql`
     {
         mutation getuser( $username:String! ){
            user(login: $username) {
              name
              login
              company
              repositories(first: 100, isFork: false) {
                nodes {
                  name
                  url
                }
              }
              id
              avatarUrl
            }
        }
    }
    `,
    {
        props:({ mutate }) => ({
            getuser:(username) => mutate({ variables:{ username } })
        }),
    }
)(DiscoverScreen);

const styles = StyleSheet.create({
    searchText:{
        fontSize:20, 
        color:'white', 
        fontWeight:'400',
        marginTop:'10%', 
        marginLeft:'5%'
    },
    textInput:{
        width:'90%', 
        height:'8%', 
        borderColor:'white', 
        borderRadius:10, 
        borderWidth:1, 
        alignSelf:'center'
    },
    buttonContainer:{
        backgroundColor:'#ef5350', 
        alignSelf:'center', 
        justifyContent:'center', 
        alignItems:'center', 
        borderColor:'#ddd', 
        borderWidth:0.5, 
        position:'absolute', 
        bottom:30, 
        width:'70%', 
        height:'8%', 
        borderRadius:10
    },
    btnText:{
        color:'#fff', 
        fontSize:20, 
        fontWeight:'400'
    }
})