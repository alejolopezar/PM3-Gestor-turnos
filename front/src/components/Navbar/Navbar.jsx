import { Container, ButtonsContainer } from "/styled"

const Navbar = () => {

    const homeButton = () => {console.log("home")}
    const profileButton = () => {console.log("profile")}
    const logoutButton = () => {console.log("logout")}

  return (
    <Container>

    <h2>TurnosApp</h2>
        <ButtonsContainer>
            <button onClick={homeButton}>Home</button>
            <button onClick={profileButton}>Home</button>
            <button onClick={logoutButton}>Home</button>
      </ButtonsContainer>
      </Container>
  )
}
export default Navbar
