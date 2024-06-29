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
import { useGetCategoriesQuery } from '../services/shopService'
import { theme } from '../config/theme'
import { ROUTE } from '../navigation/routes'

export const Categories = () => {
  const dispatch = useDispatch()
  const { navigate } = useNavigation()
  const { data: categorias, isLoading } = useGetCategoriesQuery()
  
  const handlePress = category => {
    dispatch(setCategorySelected(category))
    navigate(ROUTE.ITEM_LIST_CATEGORY, { category })
  }

  return (
    <View style={styles.categories}>
      {isLoading ? (
        <View style={styles.categoriesLoading}>
          <ActivityIndicator size='large' color={theme.colors.gray[500]} />
          <Text>Cargando categorias...</Text>
        </View>
      ) : (
        <FlatList
          contentContainerStyle={styles.list}
          data={categorias}
          horizontal
          renderItem={({ item }) => (
            <CategoryItem name={item.category} img={item.img} onPress={() => handlePress(item.category)} />
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
    flex: 0.65,
    paddingTop: 32,
  },
  list: {
    width: '100%',
    justifyContent: 'space-between',
  },
  textCategories: {
    fontSize: 16,
    alignItems: 'center',
  },
})