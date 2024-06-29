import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Provider } from "react-redux"
import { store } from "../../store/index"
import {MainNavigator} from "../../navigation/MainNavigator"
import {theme} from "../../config/theme"
import {init} from "../../db/index"

init()
  .then(() => {
    console.log("Database initialized")
  })
  .catch((err) => {
    console.log(err)
  })

export default function HomeScreen() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar backgroundColor = {theme.colors.gray[700]} style="light" />
        <MainNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}
