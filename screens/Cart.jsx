import { View, Text, StyleSheet, FlatList, Pressable, SafeAreaView } from 'react-native'
import { CartItem } from '../components/CartItem'
import cart from '../assets/data/cart'
import { formatPrice } from '../utils/price'
import { useState } from 'react'
import { theme } from '@/config/theme'


export const Cart = () => {

    const [total, setTotal] = useState(109.98)
    const [cartIsEmpty, setCartIsEmpty] = useState(false)

    const handleDelete = item => {
        const newCart = cart.filter(cartItem => cartItem.id !== item.id)
        setCartIsEmpty(newCart.length === 0)
        setTotal(total - item.price)
    }

    const confirmOrder = () => {
        setTotal(0)
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
                {cartIsEmpty ? null : (
                    <Pressable style={styles.button} disabled={cartIsEmpty} onPress={confirmOrder}>
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