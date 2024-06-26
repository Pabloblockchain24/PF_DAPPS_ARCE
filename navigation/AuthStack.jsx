import { createNativeStackNavigator } from "@react-navigation/native-stack"
const Stack = createNativeStackNavigator()
import { Login } from '../screens/Login'
import { Home } from "../screens/Home"
import { SignUp } from '../screens/SignUp'
import { ItemListCategory } from "../screens/ItemListCategory"
import { ItemDetail } from "../screens/ItemDetail"
import { Cart } from "../screens/Cart"
import { ROUTE } from "../navigation/routes"

export const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={ROUTE.LOGIN}
        >
            <Stack.Screen name={ROUTE.LOGIN} component={Login} />
            <Stack.Screen name={ROUTE.SIGN_UP} component={SignUp} />
        

        </Stack.Navigator>
    )
}