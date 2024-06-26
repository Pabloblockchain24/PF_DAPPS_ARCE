import React from 'react'
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import { theme } from '../config/theme'

export const CategoryItem = ({ name, img, onPress }) => {
  return (
    <Pressable style={styles.category} onPress={onPress}>
      <ImageBackground
        source={{ uri: img }}
        resizeMode='cover'
        style={styles.imageBackground}
      >
        <View style={styles.overlay} />
        <Text style={styles.name}>{name}</Text>
      </ImageBackground>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  category: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 110,
    height: 150,
  },
  imageBackground: {
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.05)'
  },
  name: {
    color: theme.colors.black,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
