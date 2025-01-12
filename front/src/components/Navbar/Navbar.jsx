import style from "./Navbar.module.css"

const Navbar = () => {

    const homeButton = () => {console.log("home")}
    const profileButton = () => {console.log("profile")}
    const logoutButton = () => {console.log("logout")}

  return (
    <div className="style.contoiner">

    <h2>TurnosApp</h2>
        <div>
            <button onClick={homeButton}>Home</button>
            <button onClick={profileButton}>Home</button>
            <button onClick={logoutButton}>Home</button>
      </div>
      </div>
  )
}
export default Navbar
