import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {ROUTE, Route} from '../navigation/routes'
import { TiendaStack } from './TiendaStack'
import { CartStack } from './CartStack'
import { OrdersStack } from './OrderStack'
import { theme } from '../config/theme'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export const TabNavigator = () => {
    const Tabs = createBottomTabNavigator()

    return (
        <Tabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: theme.colors.gray[700],
                },
                tabBarActiveBackgroundColor: theme.colors.gray[600],
                tabBarActiveTintColor: theme.colors.gray[100],
                tabBarInactiveTintColor: theme.colors.gray[400],

            }}
        >
            <Tabs.Screen 
            name={"RAVE SHOP"} 
            component={TiendaStack} 
            options={{ tabBarIcon: () => <FontAwesome5 name="home" size={18} color={theme.colors.gray[100]} /> }}
            />
            <Tabs.Screen 
            name={ROUTE.CART_STACK} 
            component={CartStack} 
            options={{ tabBarIcon: () => <FontAwesome5 name="shopping-cart" size={18} color={theme.colors.gray[100]} /> }}
            />
            <Tabs.Screen 
            name={"ORDERS"} 
            component={OrdersStack} 
            options={{ tabBarIcon: () => <FontAwesome5 name="shopping-bag" size={18} color={theme.colors.gray[100]} /> }}

            />
        </Tabs.Navigator>
    );
}
