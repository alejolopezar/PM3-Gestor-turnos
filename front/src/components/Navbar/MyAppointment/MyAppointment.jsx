const MyAppointment = ({ date, time, status, handleCancel }) => {
    return (
        <div>
            <p>Dia: {date}</p>
            <p>Hora: {time}</p>
            <p>Estado: {status}</p>
            <button onClick={handleCancel}>Cancelar</button>
        </div>
    )
}

export default MyAppointment