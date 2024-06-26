import { FlatList, StyleSheet, Text, View } from 'react-native'
import orders from '../assets/data/orders.json'
import { OrderItem } from '../components/OrderItem'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {theme} from "../config/theme"
export const Orders = () => {
//   const cart = useSelector(state => state.cart.value)

//   useEffect(() => {
//     // 1. HACER GET DE LA BD DE REALTIME DATABASE DE FIREBASE
//     // 2. ACTUALIZAR EL ESTADO DEL CART CON LOS DATOS OBTENIDOS
//   }, [])

//   useEffect(() => {
//     // HACER POST DE LA BD DE REALTIME DATABASE DE FIREBASE
//   }, [cart])

  return (
    <SafeAreaView>
    <View style={styles.orders}>
      <FlatList
        contentContainerStyle={styles.list}
        data={orders}
        renderItem={({ item }) => <OrderItem {...item} />}
        ListEmptyComponent={<Text>No orders</Text>}
      />
    </View>

    </SafeAreaView>

  )
}

export const styles = StyleSheet.create({
  orders: {
    backgroundColor: theme.colors.gray[100],
    flex:1,
    minHeight: '100%',
    paddingHorizontal:16
  },
  list: {
    gap: 32,
  },
})