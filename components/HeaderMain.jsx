import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { useSelector } from 'react-redux';

export const HeaderMain = () => {
    const { email, photo } = useSelector(state => state.auth.value.user)

    return (
        <View style={styles.containerHeader}>
            <Image
                style={styles.imgLogo}
                source={require("../assets/images/raveLogo.jpg")}
            />
            <View style={styles.infoUser}>
                <Image
                    source={
                        photo
                            ? { uri: photo }
                            : require('../assets/images/profile_placeholder.jpg')
                    }
                    resizeMode='cover'
                    style={styles.imageCamera}
                />
                <Text style={styles.textUser}> {email} </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 80,
    },
    imgLogo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
    },
    imageCamera: {
        width: 30,
        height: 30,
        borderRadius: 20
    },
    textUser: {
        fontSize: 12
    },
    infoUser: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 4
    }

})