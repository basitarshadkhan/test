import React from 'react'
import { View , Text, StyleSheet, Animated, FlatList, AsyncStorage, TouchableOpacity } from 'react-native'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export default class Favourites extends React.Component{

    componentDidMount(){
        this.setState({ userData:AsyncStorage.getAllKeys('key') });
        if(!this.state.userData == []){
            this.setState({ dataAvailable:true })
        }
    }

    constructor(props){
        super(props);
        this.state = {
            userData:[],
            dataAvailable:false
        }
    }

    renderItem = ({ item }) => (
        <TouchableOpacity
            onPress = { () => this.props.navigation.navigate('FavouriteUser', {
                user: item
              }) }
        >
            <Text style = {{ fontWeight:'500', fontSize:20, color:'#fff' }}>
                { item }
            </Text>
        </TouchableOpacity>
    )

    render(){
        return(
            this.state.dataAvailable ? 
            <View style = {{ flex:1 }}>
                <AnimatedFlatList
                    style={{
                    width:'90%',
                    marginLeft:'5%'
                    }}
                    data={this.state.userData}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => String(index)}
                    contentContainerStyle={{paddingTop: 0 }}
                    scrollIndicatorInsets={{top: 0 /*paddingHeight*/}}
                />
            </View>
            :
            <View style = { styles.noTextContainer }>
                <Text style = {{ alignSelf:'center' }}>
                    No data Available
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    noTextContainer:{
        flex:1, 
        justifyContent:'center', 
        alignItems:'center'
    }
})