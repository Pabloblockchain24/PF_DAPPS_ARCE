import { SafeAreaView } from "react-native-safe-area-context";
import {
  Pressable,
  View,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions
} from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSignUpMutation } from "../services/authServices";
import { theme } from "../config/theme";
import {signUpSchema} from "../validations/signUpShcema";
import {ROUTE} from "../navigation/routes";
export const SignUp = () => {
  const navigation = useNavigation();

  const [triggerSignUp, { isLoading, isSuccess, isError, error }] = useSignUpMutation();
  const [credentials, setCredentials] = useState({ name: '',  email: '', password: '', });

  const handleInputChange = (name, value) => {
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSignUp = async () => {
    try {
      const validation = signUpSchema.validateSync({
        email: credentials.email,
        password:credentials.password,
      })
      await triggerSignUp(credentials).unwrap();
    } catch (err) {
      console.log(err.message)
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigation.navigate(ROUTE.LOGIN);
    }
  }, [isSuccess, navigation]);

  const styles = createStyles(useWindowDimensions().height);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.Register}>
        <View style={styles.inputContainer}>

          <Text style={styles.title}>REGISTRO </Text>

          <TextInput
            style={styles.inputCustom}
            placeholder="Nombre"
            value={credentials.name}
            onChangeText={(text) => handleInputChange('name', text)}
          />

          <TextInput
            style={styles.inputCustom}
            placeholder="Correo Electrónico"
            value={credentials.email}
            onChangeText={(text) => handleInputChange('email', text)}
          />

          <TextInput
            style={styles.inputCustom}
            placeholder="Contraseña"
            secureTextEntry
            value={credentials.password}
            onChangeText={(text) => handleInputChange('password', text)}
          />

          <Pressable style={styles.boton} onPress={handleSignUp} disabled={isLoading}>
            <Text style={styles.botonText}>{isLoading ? 'REGISTRANDO ...' : 'REGISTRARSE'}</Text>
          </Pressable>
          {isError && <Text style={styles.errorText}>Fallo al registrarse, intenta de nuevo.</Text>}
        </View>
      </View>
    </SafeAreaView>
  );
};

const createStyles = deviceHeight =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: 'white'
    },
    title:{
      fontSize: 24,
      fontWeight: 'bold',
      paddingVertical: 32
    },
    Register: {
      flex: 1,
      height: deviceHeight - 130,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
      padding: 16,
      gap: 32,
    },
    inputCustom: {
      width: "100%",
      height: 40,
      margin: 12,
      borderWidth: 1,
      paddingHorizontal: 16,
      borderColor: theme.colors.gray[700] ,
      alignItems: "center",
    },
    boton: {
      backgroundColor: theme.colors.gray[500],
      width: "100%",
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 12,
      marginTop: 16,
    },
    botonText: {
      fontWeight: "700",
      color: "white",
    },
    inputContainer: {
      width: "80%",
      padding: 16,
      alignItems: "center",
    },
    errorText: {
      color: "red",
      marginTop: 8,
    }
  });
