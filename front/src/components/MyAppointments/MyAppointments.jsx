import MyAppointment from "../../components/MyAppointment/MyAppointment"
import { useState } from "react"
import axios from "axios";
import { useEffect } from "react";

const MyAppointments = () => {

    const [appointements, setAppointments ] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:3000/appointments")
        .then((response) => {
            setAppointments(response.data);
        })
        .catch((error) => alert(error));
    }, []);

    const handleCancel = (id) => {
        console.log("Turno cancelado", id);
    };
    
    return (
        <>

        {appointements?.map((app) => (
            <MyAppointment
            key={app.id}
            name={app.user.name}
            email={app.user.email}
            date={app.date}
            time={app.time}
            status={app.status}
            handleCancel={() => handleCancel(app.id)}
            />
        ))}
        </>
    );
};

export default MyAppointments