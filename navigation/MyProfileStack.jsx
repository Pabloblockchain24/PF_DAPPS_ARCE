import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();
import { ROUTE } from './routes'
import { MyProfile } from '../screens/MyProfile'
import { ImageSelector } from '../screens/ImageSelector'
// import { LocationSelector } from '../screens/locationSelector'
// import { ListAddress } from '../screens/listAddress'


export const MyProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name={ROUTE.MY_PROFILE}
        component={MyProfile}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name={ROUTE.IMAGE_SELECTOR}
        component={ImageSelector}
        options={{ headerTitle: 'Seleccionar imagen' }}
      />
    </Stack.Navigator>
  )
}