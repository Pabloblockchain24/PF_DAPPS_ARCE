import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TiendaStack } from './TiendaStack'
import { CartStack } from './CartStack'
import { OrdersStack } from './OrderStack'
import { MyProfileStack} from "./MyProfileStack"
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
                name={"TIENDA"}
                component={TiendaStack}
                options={{ tabBarIcon: () => <FontAwesome5 name="home" size={18} color={theme.colors.gray[100]} /> }}
            />
            <Tabs.Screen
                name={"CARRITO"}
                component={CartStack}
                options={{ tabBarIcon: () => <FontAwesome5 name="shopping-cart" size={18} color={theme.colors.gray[100]} /> }}
            />
            <Tabs.Screen
                name={"ORDENES"}
                component={OrdersStack}
                options={{ tabBarIcon: () => <FontAwesome5 name="shopping-bag" size={18} color={theme.colors.gray[100]} /> }}

            />

            <Tabs.Screen
                name={"MI PERFIL"}
                component={MyProfileStack}
                options={{ tabBarIcon: () => (<FontAwesome5 name="user" size={18} color={theme.colors.gray[100]} />),headerShown: true}} 
            />

        </Tabs.Navigator>
    );
}
