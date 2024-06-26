import { View, Text, Pressable, StyleSheet, Image } from 'react-native'

export const ProductHomeItem = ({ brand, model, img, price, onPress }) => {
    return (
        <Pressable style={styles.productContainer} onPress={onPress}>
            <Text> {brand}</Text>
            <Text style={styles.model}> {model}</Text>
            <Image
                source={{ uri: img }}
                resizeMode='cover'
                style={styles.img}
            />
            <Text> {price}</Text>
        </Pressable>

    )
}
const styles = StyleSheet.create({
    productContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 110,
        height: 150,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
    },
    model:{
        fontSize:10
    },
    img: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },

})