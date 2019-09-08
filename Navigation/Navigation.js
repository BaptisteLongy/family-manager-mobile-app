import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import ShoppingList from '../Components/ShoppingList'

const ShoppingListStackNavigation = createStackNavigator({
    Search: {
        screen: ShoppingList,
        navigationOptions: {
            title: 'List de courses'
        }
    }
})

const FamilyManagerTabNavigator = createBottomTabNavigator({
    ShoppingList: {
        screen: ShoppingListStackNavigation,
        navigationOptions: {
            tabBarLabel: 'Liste de courses'
        }
    },
})

export default createAppContainer(FamilyManagerTabNavigator)