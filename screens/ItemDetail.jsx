import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import products from '../assets/data/products.json'
import { theme } from '../config/theme'
import { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ROUTE } from '../navigation/routes'
import { useDispatch } from 'react-redux'
import { formatPrice } from '../utils/price'
import { addItem } from '../features/cartSlice'
import { Button } from '../components/Button'
export const ItemDetail = () => {
  const { params } = useRoute()
  const { navigate, goBack, setOptions } = useNavigation()
  const dispatch = useDispatch()
  const [selectedSize, setSelectedSize] = useState()
  const [error, setError] = useState('')

  const item = products.find(product => product.id === params.idProduct)
  const { brand, img, model, price } = item
  const SIZES = ["S", "M", "L", "XL",]

  const handleSize = size => {
    setSelectedSize(size)
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError('Favor selecciona una talla')
      return
    }
    dispatch(addItem({ ...item, size: selectedSize }))
    goBack()
    navigate("CARRITO", { screen: ROUTE.CART })
  }

  useEffect(() => {
    setOptions({ title: model })
  }, [params.brand])

  return (
    <SafeAreaView style={styles.itemDetail}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={{ uri: img }}
            style={styles.image}
            resizeMode='contain'
          />
          <View style={styles.info}>
            <Text style={styles.text}>{brand}</Text>
            <Text style={styles.text}>{model}</Text>
            <Text style={styles.text}>{formatPrice(price)}</Text>
            <Text style={styles.titleSection}>Size</Text>
            <View style={styles.sizes}>
              {SIZES.map(size => {
                const isSelected = selectedSize === size
                return (
                  <Pressable
                    key={size}
                    style={isSelected ? styles.selectedSize : styles.size}
                    onPress={() => handleSize(size)}
                  >
                    <Text
                      style={
                        isSelected ? styles.selectedSizeText : styles.sizeText
                      }
                    >
                      {size}
                    </Text>
                  </Pressable>
                )
              })}
            </View>
            <View style={styles.buttonContainer}>
              {error ? <Text style={styles.errorText}>{error}</Text> : null}
              <Button onPress={handleAddToCart}> Agregar al carrito</Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  itemDetail: {
    flex: 1,
    padding: 16,
    marginTop: 64
  },
  container: {
    gap: 16,
    backgroundColor: theme.colors.gray[300],
    flex: 1,
    paddingBottom: 32,
  },
  image: {
    width: '100%',
    height: 320,
    marginBottom: 16,
    backgroundColor: theme.colors.gray[50],
  },
  info: {
    gap: 20,
    paddingHorizontal: 32,
  },
  text: {
    fontWeight: 'bold',
  },
  sizes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  size: {
    borderWidth: 2,
    borderColor: theme.colors.gray[200],
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  selectedSize: {
    borderColor: theme.colors.gray[700],
    borderWidth: 2,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  sizeText: {
    color: theme.colors.gray[500],
    fontWeight: 'bold',
  },
  selectedSizeText: {
    color: theme.colors.gray[700],
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 16,
    width: '60%',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: theme.colors.gray[50],
    padding: 16,
    alignItems: 'center',
    borderRadius: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  }
})