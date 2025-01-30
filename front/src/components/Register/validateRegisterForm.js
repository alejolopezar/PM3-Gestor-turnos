export const validateRegisterForm = (values) => {

    let errors = {}

    if(!values.name){
        errors.name = "El nombre es obligatorio";
    } else if (values.name.length < 3){
        errors.name = "El nombre debe tener minimo 3 caracteres"
    }

    if(!values.email){
        errors.email = "El email es obligatorio"
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)){
        errors.email = "El email es incorrecto"
    }

    if(!values.birthdate){
        errors.birthdate = "El nobirthdate es obligatorio"

    }

    if(!values.nDni){
        errors.nDni = "El nonDni es obligatorio"

    }

    if(!values.username){
        errors.username = "El username es obligatorio"
    }else if (values.username.length < 5){
        errors.username = "El usernombre debe tener minimo 5 caracteres"
    }

    if(!values.password){
        errors.password = "El nopassword es obligatorio"
    } else if(!/^(?=.*[a-zA-Z])(?=.*\d).+$/.test(values.password)){
        errors.password = "La contraseña debe tener letras y números"
    }

    if(values.repeatPassword !== values.password){
        errors.repeatPassword = "Las contraseñas no coinciden"
    }

    return errors;
}