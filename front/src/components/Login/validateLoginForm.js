export const validateLoginForm = (values) => {
    const errors = {}

    if(!values.username){
        errors.username = "Falta completar el usuario"
    }

    if(!values.password){
        errors.password = "Falta completar la contraseña"
    }

    return errors;
}