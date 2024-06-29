import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { ProductItem } from '../components/ProductItem'
import { SearchInput } from '../components/SearchInput'
import { useEffect, useState } from 'react'
import {
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native'
import { ROUTE } from '../navigation/routes'
import { useSelector } from 'react-redux'
import { theme } from '../config/theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGetProductsByCategoryQuery } from '../services/shopService'


export const ItemListCategory = () => {
  const { navigate, setOptions } = useNavigation()
  
  const [textToSearch, setTextToSearch] = useState('')
  const [productsFiltered, setProductsFiltered] = useState(productos)

  const category = useSelector(state => state.shop.categorySeleted)
  const { data: productos, isLoading } = useGetProductsByCategoryQuery(category)

  const capitalizeBrand = brandToCapitalize => {
    const [firstLetter, ...restLetters] = brandToCapitalize
    const brand = firstLetter.toUpperCase() + restLetters.join('')
    return brand
  }

  const handleSearch = textToSearch => {
    setTextToSearch(textToSearch)
    const productsFiltered = productos.filter(product =>
      product.model.toLowerCase().includes(textToSearch.toLowerCase().trim())
    )
    setProductsFiltered(productsFiltered)
  }

  useEffect(
    () => setProductsFiltered(productos)
    , [productos])


  useFocusEffect(() => {
    setOptions({ title: capitalizeBrand(category) })
  })
  const navigateToItemDetail = (idProduct) => {
    navigate(ROUTE.ITEM_DETAIL, { idProduct });
    setTextToSearch('')
  };

  if (isLoading) {
    return (
      <View style={styles.itemListCategories}>
        <ActivityIndicator size='large' color={theme.colors.primary[600]} />
        <Text>Cargando productos...</Text>
      </View>
    )
  }

  return (
    <SafeAreaView>
      <View style={styles.itemListCategories}>
        <Text style={styles.category}>{category}</Text>
        <SearchInput onChangeText={handleSearch} value={textToSearch} onSearch={() => navigateToItemDetail()} />
        <FlatList
          contentContainerStyle={styles.list}
          data={productsFiltered}
          key={item => item.id}
          renderItem={({ item }) =>
          (<ProductItem {...item}
            onPress={() => navigateToItemDetail(item.id)} />
          )}
          showsVerticalScrollIndicator={false}
        />


        {productsFiltered && productsFiltered.length === 0 ? (
          <Text>
            No se han encontrado productos con la búsqueda "{textToSearch}"
          </Text>
        ) : null}
      </View>
    </SafeAreaView>


  )
}

const styles = StyleSheet.create({
  brand: {
    fontFamily: 'Unbounded-Bold',
    fontSize: 18,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  category: {
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 16,
    fontWeight: 'bold'
  },
  itemListCategories: {
    height: '100%',

    gap: 32,
    padding: 16,
    backgroundColor: 'white',
  },
  list: { gap: 32 },
})