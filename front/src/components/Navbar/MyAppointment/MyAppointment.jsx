const MyAppointment = ({name, email, date, time, status}) => {
    return (
        <div>
            <h2>Nombre: {name}</h2>
            <p>Email: {email}</p>
            <p>Dia: {date}</p>
            <p>Hora: {time}</p>
            <p>Estado: {status}</p>

        </div>
    )
}

export default MyAppointment