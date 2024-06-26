import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import { ROUTE } from "../navigation/routes"
import { Home } from "../screens/Home"
import { ItemListCategory } from "../screens/ItemListCategory"
import { ItemDetail } from "../screens/ItemDetail"
import { AuthStack } from './AuthStack'
import { CartStack } from './CartStack'

export const TiendaStack = () => {
return(
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
      }}
    initialRouteName={ROUTE.HOME}
    >
            <Stack.Screen name={ROUTE.HOME} component={Home}/>
            <Stack.Screen name={ROUTE.ITEM_LIST_CATEGORY} component={ItemListCategory}/>
            <Stack.Screen name={ROUTE.ITEM_DETAIL} component={ItemDetail}/>
            <Stack.Screen name={ROUTE.CART} component={CartStack}/>
            <Stack.Screen name={ROUTE.LOGIN} component={AuthStack}/>

</Stack.Navigator>

)
}