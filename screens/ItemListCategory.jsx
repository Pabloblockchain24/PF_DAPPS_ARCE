import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
  Pressable
} from 'react-native'
import { ProductItem } from '../components/ProductItem'
import { SearchInput } from '../components/SearchInput'
import { useEffect, useState } from 'react'
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { ROUTE } from '../navigation/routes'
import { useSelector } from 'react-redux'
import { theme } from '../config/theme'
import products from "../assets/data/products"
import { SafeAreaView } from 'react-native-safe-area-context'
// import { useGetProductsByCategoryQuery } from '../services/shopService'


export const ItemListCategory = () => {
  const { navigate, setOptions } = useNavigation()
  const [textToSearch, setTextToSearch] = useState('')
  const { params } = useRoute()
  const category = params.category


  // const category = useSelector(state => state.shop.categorySeleted)
  // const { data: products, isLoading } = useGetProductsByCategoryQuery(category)
  const [productsFiltered, setProductsFiltered] = useState(products)

  const navigateToItemDetails = idProduct =>
    navigate(ROUTE.ITEM_DETAIL, { idProduct })

  const capitalizeBrand = brandToCapitalize => {
    const [firstLetter, ...restLetters] = brandToCapitalize
    const brand = firstLetter.toUpperCase() + restLetters.join('')
    return brand
  }

  const handleSearch = textToSearch => {
    setTextToSearch(textToSearch)
    const productsFiltered = products.filter(product =>
      product.model.toLowerCase().includes(textToSearch.toLowerCase().trim())
    )
    setProductsFiltered(productsFiltered)
  }

  useEffect(() => setProductsFiltered(products), [products])

  useFocusEffect(() => {
    setOptions({ title: capitalizeBrand(category) })
  })

  // if (isLoading) {
  //   return (
  //     <View style={styles.itemListCategories}>
  //       <ActivityIndicator size='large' color={theme.colors.primary[600]} />
  //       <Text>Cargando productos...</Text>
  //     </View>
  //   )
  // }

  const [itemToSearch, setItemToSearch] = useState("");

  const navigateToItemDetail = () => {
    // dispatch(setCtrSelected(ctrToSearch));
    navigate(ROUTE.ITEM_DETAIL, { itemToSearch });
    setItemToSearch("");
  };


  return (
    <SafeAreaView>

    <View style={styles.itemListCategories}>
      <Text style={styles.category}>{category}</Text>
      <SearchInput
        onChangeText={handleSearch}
        value={textToSearch}
        onSearch={() => navigateToItemDetail()}
      />

      <FlatList
        contentContainerStyle={styles.list}
        data={productsFiltered}
        key={item => item.id}
        renderItem={({ item }) => (
          <ProductItem
            {...item}
            onPress={() => navigateToItemDetails(item.id)}
          />
        )}
      />
      {productsFiltered && productsFiltered.length === 0 ? (
        <Text>
          No se han encontrado zapatillas con la búsqueda "{textToSearch}"
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
    gap: 32,
    padding: 16,
    backgroundColor: 'white',
  },
  list: { gap: 32 },
})