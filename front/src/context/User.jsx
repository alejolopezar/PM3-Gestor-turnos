import axios from "axios";
import {createContext, useState} from "react";

export const UserContext = createContext({
  user: null,
  appointments: [],
  login: () => {},
  getAppointments: () => {},
  createContext: () => {},
  cancelAppointment: () => {},
  logout:()=>{}
});

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(null); 

  const [appointments, setAppointments] = useState([]);

  const login = async (input) => {
    try {
      const {data} = await axios.post(
        "http://localhost:3000/users/login",
        input
      );
      setUser(data.user);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const getAppointments = async (userId) => {
    try {
      const {data} = await axios.get(`http://localhost:3000/users/${userId}`);
      setAppointments(data.appointments);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const logout = () => {
    setUser(null);
  };

    const createAppointment = async (input) => {
        try {
          const data = {
            userId: user.id,
            time: input.time.split(" ")[0],
            date: input.date,
          };
          console.log("RAWRI createAppointment a:", data);
          await axios.post("http://localhost:3000/appointments/schedule/", data);
          getAppointments(user.id);
        } catch (error) {
          alert(error.response.data.message);
        }
      };
      
      const cancelAppointment = async (id) => {
        try {
          await axios.put(`http://localhost:3000/appointments/cancel/${id}`);
          getAppointments(user.id);
        } catch (error) {
          alert(error.response.data.message);
        }
      };

      return (
        <UserContext.Provider
          value={{
            user,
            appointments,
            login,
            getAppointments,
            createAppointment,
            cancelAppointment,
            logout,
          }}
        >
          {children}
        </UserContext.Provider>
      );
    };