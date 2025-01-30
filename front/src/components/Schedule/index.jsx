import DatePicker from "react-datepicker"
import { UserContext } from "../../context/User";
import { useState, useContext } from "react";
function Schedule() {
    const {createAppointment} = useContext(UserContext);
    const [date, setDate] = useState(new Date());
    const [formattedDate, setFormattedDate] = useState({
        date: "",
        time: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        await createAppointment(formattedDate);

        alert("Appointment scheduled successfully");
    };

    return (
        <form onSubmit={handleSubmit}>
            <DatePicker
                selected={date}
                onChange={(date) => {
                    setDate(date);
                    setFormattedDate({
                        date: date.toLocaleDateString(),
                        time: date.toLocaleTimeString(),
                    });
                }}
                showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
            />
            <button type="submit">Schedule</button>
        </form>
        
    );
}
export default Schedule;