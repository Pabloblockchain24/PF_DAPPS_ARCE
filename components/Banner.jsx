import { ImageBackground, StyleSheet, Text, View } from 'react-native'

export const Banner = () => (
  <ImageBackground
    source={require('../assets/images/backgroundBanner.jpg')}
    resizeMode='cover'
    style={{ borderRadius: 8, overflow: 'auto' }}
  >
    <View style={styles.banner}>
      <Text style={styles.text}>NEW ARRIVALS | RAVE SEASON</Text>
    </View>
  </ImageBackground>
)

const styles = StyleSheet.create({
  banner: {
    alignItems: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 62,
    width: '100%',
  },
  text: {
    color: 'grey',
    fontSize: 24,
  },
})