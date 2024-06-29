import { Image, StyleSheet, Text, View, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { ROUTE } from '../navigation/routes'
import { theme } from '../config/theme'
import { Button } from '../components/Button'
import { useEffect } from 'react'
import {logout} from '../features/authSlice'
import { deleteSession } from '../db/index'
export const MyProfile = () => {
  const { navigate } = useNavigation()
  const { email, photo } = useSelector(state => state.auth.value.user)
  const dispatch = useDispatch()
  useEffect(() => { }, [photo])

  const goToImageSelector = () => navigate(ROUTE.IMAGE_SELECTOR)
  const handleLogout = () => {
    dispatch(logout())
    deleteSession()
    navigate(ROUTE.LOGIN)
  }

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

      <Button onPress={goToImageSelector}> AGREGAR FOTO PERFIL</Button>
      <Button onPress={handleLogout} style={{ backgroundColor: theme.colors.primary[400] }}>LOGOUT</Button>

    </View>
  )
}

const styles = StyleSheet.create({
  myProfile: {
    alignItems: 'center',
    backgroundColor: theme.colors.gray[100],
    flex: 1,
    gap: 32,
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 200,
  },

  textUser: {
    fontSize: 16,
    fontWeight: 'bold'
  },
})