import { object, string, ref } from "yup"

export const signUpSchema = object().shape({
    email: string()
        .email("Debes introducir un correo electronico valido")
        .required("Debes introducir un correo electronico"),
    password: string()
        .min(6, "La contraseña requiere minimo 6 caracteres")
        .required("La contraseña es requerida"),

    confirmPassword: string()
    .oneOf([ref("password"), null], "Las contraseñas no coinciden")
    .required(),
})