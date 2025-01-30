import { useState, useContext } from "react";
import { validateLoginForm } from "./validateLoginForm";
import { useNavigate, Link } from "react-router-dom";
import { APPOINTMENTS, REGISTER } from "../../helpers/pathsUrls";
import { UserContext } from "../../context/User";

const Login = () => {

    const navigate = useNavigate();
    const {login} = useContext(UserContext);

    const [user, setUser] = useState({
        username:"",
        password: "",
    });

    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUser({
            ...user,
            [name]: value,
        });
        
        setErrors(validateLoginForm({...user, [name]: value}))
    };

    const handleBlur = (e) => {
        const {name} = e.target

        setTouched({
            ...touched,
            [name]: true,
        });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            await login(user)

            //localStorage.setItem("userId", loginUser.data.user.id)

            navigate(APPOINTMENTS);
        } catch (error) {
            alert("Hubo un error", error);
        }
    };

    return (
        <>
        <h2>Iniciá sesión</h2>

        <form onSubmit={handleSubmit}>
            <div>
            <label>
                Usuario:
                <input
                name="username"
                type="text"
                value={user.username}
                onChange={handleChange}
                onBlur={handleBlur}
                />
            </label>
            {touched.username && errors.username && <p style={{color: "red"}}>{errors.username}</p>}
            </div>

            <div>
            <label>
                Contraseña:
                <input
                name="password"
                type="text"
                value={user.password}
                onChange={handleChange}
                onBlur={handleBlur}
                />
            </label>
            {touched.password && errors.password && <p style={{color: "red"}}>{errors.password}</p>}
            </div>

            <button type="submit">Ingresar</button>
        </form>

        <p> ¿No estas registrado? <Link to={REGISTER}>Registrate ahora</Link></p>
        </>
    );
};

export default Login;