import MyAppointment from "../../components/MyAppointment/MyAppointment"
import { useContext, useState } from "react"
import { useEffect } from "react";
import { UserContext } from "../../context/User";

const MyAppointments = () => {
    const {appointements, getAppointments, user, cancelAppointment} = useContext(UserContext);
    const [flag, setFlag] = useState(true)

    useEffect(() => {
        //const userId = localStorage.getItem("userId")
        const fetch = async () => await getAppointments(user.id);
        fetch();
        
    }, []);

    const handleCancel = async (id) => {
        try {
            
            await cancelAppointment(id);
            setFlag(!flag)

        } catch (error) {
            alert("Error al cancelar el turno", error)
        }

    };
    
    return (
        <>

        {appointements?.map((app) => (
            <MyAppointment
            key={app.id}
            date={app.date}
            time={app.time}
            status={app.status === "active" ? "Activo": "Cancelado"}
            handleCancel={() => handleCancel(app.id)}
            />
        ))}
        </>
    );
};

export default MyAppointments