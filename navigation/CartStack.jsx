import { createNativeStackNavigator } from "@react-navigation/native-stack"
const Stack = createNativeStackNavigator()
import { ROUTE } from "../navigation/routes"
import { Cart } from "../screens/Cart"
import { Orders } from "../screens/Orders"
export const CartStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true
            }}
            initialRouteName={ROUTE.CART}
        >
            <Stack.Screen
                name={"CART"}
                component={Cart}
            />

            <Stack.Screen
                name={"ORDERS"}
                component={Orders}
            />


        </Stack.Navigator>
    )
}