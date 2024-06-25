import { createNativeStackNavigator } from "@react-navigation/native-stack"
const Stack = createNativeStackNavigator()
import { Login } from '../screens/Login'
import { Main } from "../screens/Main"


export const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Main"
        >
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}