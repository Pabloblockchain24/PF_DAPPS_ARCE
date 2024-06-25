import { Image, StyleSheet, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from "react-redux"
import { store } from "../../store/index"
import { Login } from "../../screens/Login"
import {MainNavigator} from "../../navigation/MainNavigator"

export default function HomeScreen() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MainNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}
