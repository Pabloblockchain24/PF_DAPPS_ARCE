import { View, Text, StyleSheet, FlatList, Pressable, SafeAreaView } from 'react-native'
import { CartItem } from '../components/CartItem'
import { formatPrice } from '../utils/price'
import { theme } from '@/config/theme'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem } from '../features/cartSlice'
import { useNavigation } from '@react-navigation/native'
import { ROUTE } from '@/navigation/routes'
import { usePostOrderMutation } from '@/services/shopService'
export const Cart = () => {
    const dispatch = useDispatch()
    const {navigate} = useNavigation()

    const user = useSelector(state => state.auth.value.user)
    const cart = useSelector(state => state.cart.value.items)
    const total = useSelector(state => state.cart.value.total)
    const [triggerPost, result] = usePostOrderMutation()


    const handleDelete = item => {
        dispatch(removeItem(item))
      }

    const confirmOrder = () => {
        triggerPost({cart, total, user})
        navigate(ROUTE.HOME, { screen: ROUTE.HOME});
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.cart}>
                <FlatList
                    contentContainerStyle={{ gap: 32 }}
                    data={cart}
                    renderItem={({ item }) => (
                        <CartItem {...item} onDelete={() => handleDelete(item)} />
                    )}
                    ListEmptyComponent={<Text>No hay productos en el carrito</Text>}
                />
                <View style={styles.total}>
                    <Text style={styles.totalText}>TOTAL</Text>
                    <Text style={styles.totalText}>{formatPrice(total)}</Text>
                </View>
                {cart.length > 0 && (
                    <Pressable style={styles.button} onPress={confirmOrder}>
                        <Text style={styles.buttonText}>CONFIRMAR PEDIDO </Text>
                    </Pressable>
                )}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 32,
        backgroundColor: theme.colors.gray[100],
    },
    cart: {
        minHeight: '100%',
        height: '100%',
        backgroundColor: theme.colors.gray[100],
        padding: 32,
    },
    total: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
        marginBottom: 32
    },
    button:{
        backgroundColor: theme.colors.gray[400],
        alignItems: 'center',
        alignSelf: 'center',
        width: '50%',
        padding: 16,
        borderRadius: 8,
        marginTop: 16,
        marginBottom: 32,

    },
    buttonText:{
        color: 'white',
        fontWeight: 'bold',
    },
    totalText:{
        fontWeight: 'bold',
        fontSize: 18
    }

})