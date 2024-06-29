import { createNativeStackNavigator } from "@react-navigation/native-stack"
const Stack = createNativeStackNavigator()
import { Login } from '../screens/Login'
import { SignUp } from '../screens/SignUp'
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