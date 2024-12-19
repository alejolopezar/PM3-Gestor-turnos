import { newAppointmentDataDTO } from "../dto/newAppointmentDataDTO";
import { StatusAppointment } from "../enums/StatusAppointment";
import IAppointment from "../interfaces/Appointment";
import { getUserByIdService } from "./users.services";

const appointmentsDB: IAppointment[] = [];
let id = 1;

const getAllAppointmentsService = async (): Promise<IAppointment[]> => {
return appointmentsDB;
};

const getAppointmentByIdService = async (id: number): Promise<IAppointment | undefined> => {
    const foundAppointment = appointmentsDB.find((app) => app.id === id);

    return foundAppointment;
};

const newAppointmentService = async (dataApp: newAppointmentDataDTO): Promise<IAppointment | undefined> => {
    const { date, time, userId } = dataApp;

    const foundUser = await getUserByIdService(userId)

    if(!foundUser){
        return undefined;
    }

    const newApp: IAppointment = {
        id,
        date,
        time,
        userId,
        status: StatusAppointment.ACTIVE
    }

    appointmentsDB.push(newApp);
    id++;

    return newApp;
}

const cancelAppointmentService = async (id: number) => {
    
    const foundApp = await getAppointmentByIdService(id)

    if(!foundApp){
        return false;
    }

    foundApp.status = StatusAppointment.CANCELLED

    return true;

}

export { getAllAppointmentsService, getAppointmentByIdService, newAppointmentService, cancelAppointmentService };