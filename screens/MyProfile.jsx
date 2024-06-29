import { Image, StyleSheet, Text, View, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { ROUTE } from '../navigation/routes'
import { theme } from '../config/theme'
import { useEffect } from 'react'

export const MyProfile = () => {
  const { navigate } = useNavigation()
  const { email, photo } = useSelector(state => state.auth.value.user)  

  useEffect(() => {}, [photo])

  const goToImageSelector = () => navigate(ROUTE.IMAGE_SELECTOR)


  return (
    <View style={styles.myProfile}>
      <Text style={styles.textUser}>EMAIL: {email}</Text>
      <Image
        source={
          photo
            ? { uri: photo }
            : require('../assets/images/profile_placeholder.jpg')
        }
        resizeMode='cover'
        style={styles.image}
      />
      <Pressable style={styles.buttonAdd} onPress={goToImageSelector}>
        <Text style={styles.buttonText}> AGREGAR FOTO PERFIL </Text> 
      </Pressable> 

    </View>
  )
}

const styles = StyleSheet.create({
  myProfile: {
    alignItems: 'center',
    backgroundColor: theme.colors.gray[100],
    flex: 1,
    gap: 64,
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 200,
  },
  buttonAdd:{
    backgroundColor: theme.colors.gray[400],
    padding: 16,
    alignItems: 'center',
    width: 200
  },
  buttonText:{
    color: theme.colors.gray[50],
    fontWeight:'bold'
  },
  textUser:{
    fontSize: 16,
    fontWeight: 'bold' 
   }
})