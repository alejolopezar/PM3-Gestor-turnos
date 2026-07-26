import { SLASH } from "../../helpers/pathsUrls";
import { Container, ButtonsContainer } from "./styled"
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

    const homeButton = () => {console.log("home")}
    const profileButton = () => {console.log("profile")}
    const logoutButton = () => {localStorage.removeItem("userId");
      navigate(SLASH)
    };

  return (
    <Container>

    <h2>TurnosApp</h2>
        <ButtonsContainer>
          {pathname !== "/" &&
          (pathname !== "/registrarse" && (
            <>
            <button onClick={homeButton}>Home</button>
            <button onClick={profileButton}>Home</button>
            <button onClick={logoutButton}>Salir</button>
            </>
          ))
          }
      </ButtonsContainer>
      </Container>
  );
};
export default Navbar;
