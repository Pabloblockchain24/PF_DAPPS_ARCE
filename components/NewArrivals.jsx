import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { ProductHomeItem } from './ProductHomeItem'
import {ROUTE} from "../navigation/routes"
import { setProductIdSelected } from '../features/shopSlice'
import { useGetProductsQuery } from '../services/shopService'
import { theme } from '../config/theme'
export const NewArrivals = () => {
  const { navigate } = useNavigation()
  const { data, isLoading, error } = useGetProductsQuery()
  const dispatch = useDispatch()

  const handlePress = idProduct => {
    dispatch(setProductIdSelected(idProduct))
    navigate(ROUTE.ITEM_DETAIL, { idProduct })
  }
  return (
    <View style={styles.categories}>
      <Text style={styles.text}>NEW ARRIVALS</Text>
       {isLoading ? (
        <View style={styles.categoriesLoading}>
          <ActivityIndicator size='small' color={theme.colors.primary[600]} />
          <Text>Cargando categorias...</Text>
        </View>
      ) : ( 
        <FlatList
          contentContainerStyle={styles.list}
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ProductHomeItem
              brand={item.brand}
              model={item.model}
              img={item.img}
              price={item.price}
              onPress={() => handlePress(item.id)} />
          )}
        />
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  categoriesLoading: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  categories: {
    flex: 1,
    alignItems: 'center',
    gap: 32,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
  },
})