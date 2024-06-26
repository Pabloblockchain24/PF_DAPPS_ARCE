import { StyleSheet, Text, View } from 'react-native'
import { formatPrice } from '../utils/price'
import { formatDate } from '../utils/date'
import { theme } from '../config/theme'
export const OrderItem = ({ id, createdAt, totalPrice, items }) => (
    <View style={styles.orderItem}>
        <View style={styles.info}>
            <Text style={{ fontWeight: 'bold' }}>N° de orden: {id}</Text>
            <Text >Fecha: {formatDate(createdAt)}</Text>
            
            <View>
                {items.map(item => (
                    <View key={item.productId} style={styles.productos}> 
                    <Text style={{ fontWeight: 'bold' }} > Cod_Producto: {item.productId}</Text>
                    <Text> Cantidad: {item.quantity}</Text>
                    </View>

                ))}
            </View>


        </View>

        <Text>{formatPrice(totalPrice)}</Text>
    </View>
)

export const styles = StyleSheet.create({
    orderItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,

        backgroundColor: theme.colors.gray[200],
        borderRadius:4
    },
    info:{
        gap:12
    },
    productos:{
        gap:4
    }
})