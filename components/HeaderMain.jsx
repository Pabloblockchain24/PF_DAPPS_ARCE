import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { useSelector } from 'react-redux';

export const HeaderMain = () => {
    const navigation = useNavigation();
    const user = useSelector((state) => state.auth.user);

    const handleLoginPress = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.containerHeader}>
            <Image
                style={styles.imgLogo}
                source={require("../assets/images/raveLogo.jpg")}
            />

            {user ? (
                <Text>{`Hola, ${user.name}`}</Text>
            ) : (
                <Pressable onPress={handleLoginPress}>
                    <Text>Iniciar Sesión</Text>
                </Pressable>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    containerHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 70,
        },
    imgLogo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
    }
})