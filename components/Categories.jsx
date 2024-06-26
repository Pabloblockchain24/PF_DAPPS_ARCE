import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    View,
  } from 'react-native'
  import { CategoryItem } from './CategoryItem'
  import { useNavigation } from '@react-navigation/native'
  import { useDispatch, useSelector } from 'react-redux'
  import { setCategorySelected } from '../features/shopSlice'
  // import { useGetCategoriesQuery } from '../services/shopService'
  import { theme } from '../config/theme'
  import { ROUTE } from '../navigation/routes'
  import categories from "../assets/data/categories.json"

  export const Categories = () => {

    const { navigate } = useNavigation()
    // const { data, isLoading, error } = useGetCategoriesQuery()
    const dispatch = useDispatch()
  
    const handlePress = category => {
      // dispatch(setCategorySelected(category))
      navigate(ROUTE.ITEM_LIST_CATEGORY, { category })
    }
  
    return (
      <View style={styles.categories}>
        {/* <Text style={styles.text}>CATEGORIES</Text> */}
        {/* {isLoading ? (
          <View style={styles.categoriesLoading}>
            <ActivityIndicator size='small' color={theme.colors.primary[600]} />
            <Text>Cargando categorias...</Text>
          </View>
        ) : ( */
          <FlatList
            contentContainerStyle={styles.list}
            data={categories}
            horizontal
            renderItem={({ item }) => (
              <CategoryItem name={item.category} img={item.img} onPress={() => handlePress(item.category)} />
            )}
          />
        /* ) */
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
      flex: 0.55,
      paddingTop: 32,
    },
    list: {
      width: '100%',
      justifyContent: 'space-between',
    },
    text: {
      fontSize: 16,
    },
  })