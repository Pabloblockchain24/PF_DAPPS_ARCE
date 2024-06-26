import { createNativeStackNavigator } from "@react-navigation/native-stack"
const Stack = createNativeStackNavigator()
import { ROUTE } from "../navigation/routes"
import { Orders } from "../screens/Orders"

export const OrdersStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ 
                headerShown: true 
            }}
            initialRouteName={ROUTE.ORDERS}
        >
            <Stack.Screen 
            name={"ORDERS"} 
            component={Orders} 
            />
        

        </Stack.Navigator>
    )
}