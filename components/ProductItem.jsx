import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    View
  } from 'react-native'
  import { theme } from '../config/theme'
  import { formatPrice } from '../utils/price'
  
  export const ProductItem = ({ brand, img, model, onPress, price }) => (
    <Pressable style={styles.productItem} onPress={onPress}>
      <Image source={{ uri: img }} style={styles.image} resizeMode='contain' />
      <View style={styles.info}>
        <Text style={styles.title}>{brand}</Text>
        <Text style={styles.text}>{model}</Text>
        <Text style={styles.text}>{formatPrice(price)}</Text>
      </View>
    </Pressable>
  )
  
  const styles = StyleSheet.create({
    productItem: {
      borderRadius: 4,
      backgroundColor: theme.colors.gray[200],
    },
    image: {
      height: 160,
      backgroundColor: theme.colors.gray[100],
    },
    info: {
      gap: 4,
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderBottomLeftRadius: 16,
      borderBottomRightRadius: 16,
    },
    title: {
      fontWeight: 'bold',
    },
    text: {
      fontSize: 14,
    },
  })