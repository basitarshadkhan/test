
import { createAppContainer, createStackNavigator } from "react-navigation";

//screens
import LoginScreen from '../screens/LoginScreen'
import DiscoverScreen from '../screens/DiscoverScreen'
import FavouriteUser from '../screens/FavoriteUser'

const AppNavigator = createStackNavigator({
    LoginScreen :{ screen:LoginScreen},
    DiscoverScreen :{ screen:DiscoverScreen},
    FavouriteUser : { screen:FavouriteUser }
},{
    initialRouteName:'LoginScreen'
})

export default createAppContainer(AppNavigator);