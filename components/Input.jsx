import { StyleSheet, Text, TextInput, View } from 'react-native'

export const Input = ({ error, ...props }) => (
  <View>
    <TextInput {...props} style={styles.input} />
    {error ? <Text style={styles.error}>{error}</Text> : null}
  </View>
)

const styles = StyleSheet.create({
  input: {
      width: 270,
      height: 40,
      margin: 12,
      borderWidth: 1,
      paddingHorizontal: 16,
      borderColor: "black",
      alignItems: "center",
  },
  box: {
    borderColor: 'gray',
    borderRadius: 4,
    borderWidth: 1,
    padding: 8,
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginTop: 2,
  },
})