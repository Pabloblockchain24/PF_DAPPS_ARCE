import { createNativeStackNavigator } from "@react-navigation/native-stack"
const Stack = createNativeStackNavigator()
import { ROUTE } from "../navigation/routes"
import { Cart } from "../screens/Cart"

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
        

        </Stack.Navigator>
    )
}