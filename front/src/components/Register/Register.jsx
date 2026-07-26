import { useState } from "react";
import { validateRegisterForm } from "./validateRegisterForm";
import axios  from "axios";
import { SLASH } from "../../helpers/pathsUrls";
import { Link, useNavigate } from "react-router-dom"; 

const Register = () => {

    const navigate = useNavigate();

    const [newUser, setNewUser] =useState({
        name: "",
        email: "",
        birthdate: "",
        nDni: "",
        username: "",
        password: "",
        repeatPassword: ""
    });

    const [ errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    

    const handleInputsForm = (event) => {
        const {name, value} = event.target;

        setNewUser({
            ...newUser,
            [name]: value,
        });

        setErrors(validateRegisterForm({...newUser, [name]: value,}))
    };

    const handleBlur = (event) => {
        const {name} = event.target;

        setTouched({
            ...touched,
            [name]: true,
        });
    };

    const submitRegisterForm = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:3000/users/register", newUser);
            alert("Usuario registrado con éxito");
            navigate(SLASH)
        } catch (error) {
            alert("hubo un error", error);
        }
    };

    return(
        <>
        <h2>Registro de nuevo usuario</h2>

        <form onSubmit={submitRegisterForm}>
            <div>
                <label>
                    Nombre
                    <input name="name" 
                    type="text"
                    value={newUser.name}
                    onChange={handleInputsForm}
                    onBlur={handleBlur}
                    />
                </label>
                {touched.name && errors.name && <p style={{color: "red"}}>{errors.name}</p>}
            </div>

            <div>
                <label>
                    Email
                    <input name="email"
                    type="email"
                    value={newUser.email}
                    onChange={handleInputsForm}
                    onBlur={handleBlur}
                    />
                </label>
                {touched.email && errors.email && <p style={{color: "red"}}>{errors.email}</p>}
            </div>

            <div>
                <label>
                    Fecha de nacimiento
                    <input name="birthdate"
                    type="date"
                    value={newUser.birthdate}
                    onChange={handleInputsForm}
                    onBlur={handleBlur}
                    />
                </label>
                {touched.birthdate && errors.birthdate && <p style={{color: "red"}}>{errors.birthdate}</p>}
            </div>

            <div>
                <label>
                    DNI
                    <input name="nDni"
                    type="number"
                    value={newUser.nDni}
                    onChange={handleInputsForm}
                    onBlur={handleBlur}
                    />
                </label>
                {touched.nDni && errors.nDni && <p style={{color: "red"}}>{errors.nDni}</p>}
            </div>

            <div>
                <label>
                    Nombre de usuario
                    <input name="username"
                    type="text"
                    value={newUser.username}
                    onChange={handleInputsForm}
                    onBlur={handleBlur}
                    />
                </label>
                {touched.username && errors.username && <p style={{color: "red"}}>{errors.username}</p>}
            </div>

            <div>
                <label>
                    Contraseña
                    <input name="password"
                    type="password"
                    value={newUser.password}
                    onChange={handleInputsForm}
                    onBlur={handleBlur}
                    />
                </label>
                {touched.password && errors.password && <p style={{color: "red"}}>{errors.password}</p>}
            </div>

            <div>
                <label>
                    Repetir Contraseña
                    <input name="repeatPasword"
                    type="password"
                    value={newUser.repeatPassword}
                    onChange={handleInputsForm}
                    onBlur={handleBlur}
                    />
                </label>
                {touched.repeatPassword && errors.name && <p style={{color: "red"}}>{errors.name}</p>}
            </div>

            <button type="submit">Registrarse</button>
        </form>

        <p> ¿Ya estas registrado? <Link to={SLASH}>Iniciá sesión</Link></p>

        </>
    )
}

export default Register