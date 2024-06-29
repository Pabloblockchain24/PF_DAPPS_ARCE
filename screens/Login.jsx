import { SafeAreaView } from "react-native-safe-area-context";
import {Pressable, Image,View,StyleSheet,Text,Alert,} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ROUTE } from '../navigation/routes'
import { useLoginMutation } from "../services/authServices";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../features/authSlice";
import { insertSession } from "../db/index";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

export const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [triggerLogin, result] = useLoginMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setIsLoading(true)
      await triggerLogin({ email, password })
    } catch (err) {
      console.error('Error en el ingreso ', err);
      Alert.alert('Error', 'correo o contraseña incorrecta')
    } finally {
      setIsLoading(false)
    }
  };

  const handleSignUpPress = () => {
    navigation.navigate(ROUTE.SIGN_UP);
  };

  useEffect(() => {
    if (result.data) {
      const { email, localId, idToken: token } = result.data
      dispatch(setUser({ email, localId, token }))
      insertSession({ email, localId, token })
    }
  }, [result.data])

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.Login}>
        <Image
          style={styles.imgLogo}
          source={require("../assets/images/raveLogo.jpg")}
        />
        <View style={styles.inputContainer}>
          <Input placeholder="pablo@gmail.com" value={email} onChangeText={setEmail}/>
          <Input placeholder="contraseña" secureTextEntry value={password} onChangeText={setPassword}/>
          <Button onPress={handleLogin} disabled={isLoading}> {isLoading ? 'INGRESANDO ...' : 'INGRESAR'} </Button>

          <Pressable style={styles.registerButton} onPress={handleSignUpPress}>
            <Text style={styles.registerButtonText}>¿No estás registrado? Regístrate aquí</Text>
          </Pressable>

        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white'
  },
  Login: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 16,
    gap: 32,
  },
  imgLogo: {
    width: "100%",
    height: 80,
    resizeMode: 'contain',
  },
  inputContainer: {
    width: "80%",
    padding: 16,
    alignItems: "center",
  },
  registerButton: {
    marginTop: 16,
    alignItems: "center",
  },
  registerButtonText: {
    color: "black",
    fontWeight: "700",
  }
});
