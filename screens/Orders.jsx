import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import { useEffect, useState, useCallback  } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { theme } from "../config/theme"
import { useGetOrdersQuery } from '@/services/orderServices'
import { OrderItem } from '../components/OrderItem'
import { useSelector } from 'react-redux'

export const Orders = () => {
  const [ordersFilteredByID, setOrdersFilteredByID] = useState([])
  const [queryKey, setQueryKey] = useState(0);

  const { localId } = useSelector(state => state.auth.value.user)
  const { data: ordenes, error, isLoading } = useGetOrdersQuery(queryKey)

  // esto es para forzar la actualización de las ordenes cuando creo una nueva
  useFocusEffect(
    useCallback(() => {
      setQueryKey(prevKey => prevKey + 1);
    }, [])
  );

  useEffect(() => {
    if (!isLoading && ordenes) {
      const aux = ordenes.filter(item => item.user.localId === localId)
      setOrdersFilteredByID(aux)
    }
  }, [ordenes, isLoading])

  return (
    <SafeAreaView >
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <Text>Loading...</Text>
        </View>
      ) : (
        <View style={styles.orders}>
          <FlatList
            contentContainerStyle={styles.list}
            data={ordersFilteredByID}
            key={item => item.cart.id}
            renderItem={({ item }) => <OrderItem email={item.user.email} total={item.total} cart={item.cart} />}
            ListEmptyComponent={<Text>No hay ordenes aún :/ </Text>}
          />
        </View>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  orders: {
    backgroundColor: theme.colors.gray[100],
    paddingHorizontal: 16,
    gap: 32,
  },
  list: {
    paddingVertical: 16,
    gap: 32
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
