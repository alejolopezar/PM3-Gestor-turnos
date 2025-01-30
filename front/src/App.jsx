//import './App.css'
import {useContext} from "react";
import GlobalStyle from "./constants/GlobalStyles"
import Home from "./views/Home/Home"
import LoginView from "./views/LoginView/LoginView"
import RegisterView from "./views/RegisterView/RegisterView"
import Navbar from "./components/Navbar/Navbar"
import { Route, Routes, Navigate } from "react-router-dom";
import { SLASH, APPOINTMENTS, REGISTER } from "./helpers/pathsUrls"
import { UserContext } from "./context/User";

const ProtectedRoute = ({children}) => {

  const {user} = useContext(UserContext);

  if (!user) {
    return <Navigate to={SLASH} replace />;
  }

  return children;
};

function App() {


  return (
    <>
      <GlobalStyle/>
      <Navbar />

      <Routes>

        <Route path={SLASH} element={<LoginView/>}/>

        <Route path={REGISTER} element={<RegisterView/>}/>

        <Route path={APPOINTMENTS} element={<ProtectedRoute><Home/></ProtectedRoute>}/>

        <Route path="otra-navbar" element={<ProtectedRoute><Navbar/></ProtectedRoute>}/>

        <Route path="otra-registro" element={<RegisterView/>}/>

      </Routes>
      
    </>
  )
}

export default App
