import { StatusAppointment } from "../enums/StatusAppointment";

interface IAppointment {
    id: number;
    date: Date;
    time: string;
    userId: number;
    status: StatusAppointment
}

export default IAppointment;