import { StyleSheet, Text, View } from 'react-native'
import { formatPrice } from '../utils/price'
import { theme } from '../config/theme'
export const OrderItem = ({ email, total, cart }) => (
    <View style={styles.orderItem}>
        <View style={styles.info}>
            <Text style={{ fontWeight: 'bold' }}>Email compra: {email}</Text>
            <View>
                {cart.map(item => (
                    <View key={item.id} style={styles.productos}>
                        <Text style={{ fontWeight: 'bold' }} > Cod_Producto: {item.id}</Text>
                        <Text> Cantidad: {item.quantity}</Text>
                    </View>
                ))}
            </View>
        </View>
        <Text>{formatPrice(total)}</Text>
    </View>
)

export const styles = StyleSheet.create({
    orderItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: theme.colors.gray[200],
        borderRadius: 4
    },
    info: {
        gap: 12
    },
    productos: {
        gap: 4
    }
})