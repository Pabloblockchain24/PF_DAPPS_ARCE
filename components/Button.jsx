import { Pressable, StyleSheet, Text } from 'react-native'
import { theme } from '../config/theme'

export const Button = ({ children, onPress, style }) => (
  <Pressable onPress={onPress} style={[styles.button, style]}>
    <Text style={styles.buttonText}>{children}</Text>
  </Pressable>
)

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.gray[400],
    padding: 16,
    alignItems: 'center',
    width: 200,
    marginTop: 16,
  },
  buttonText: {
    color: theme.colors.gray[50],
    fontWeight: 'bold'
  },
})