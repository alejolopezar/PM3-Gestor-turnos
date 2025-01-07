import { AppDataSource } from "../config/data-source";
import { newAppointmentDataDTO } from "../dto/newAppointmentDataDTO";
import { Appointment } from "../entities/Appointment";
import { StatusAppointment } from "../enums/StatusAppointment";
import { getUserByIdService } from "./users.services";
import { User } from "../entities/User";

const AppointmentRepository = AppDataSource.getRepository(Appointment)

const getAllAppointmentsService = async (): Promise<Appointment[]> => {
const allAppointments = await AppointmentRepository.find({
    relations: { user: true },
});

    return allAppointments;
};

const getAppointmentByIdService = async (
    id: number
): Promise<Appointment | null> => {
    const foundAppointment = await AppointmentRepository.findOne({
        where: { id },
        relations: ["user"],
    });
    return foundAppointment;
};

const newAppointmentService = async (dataApp: newAppointmentDataDTO
): Promise<Appointment | null> => {
    const { date, time, userId } = dataApp;

    const foundUser: User | null = await getUserByIdService(userId);

    if(!foundUser){
        return null;
    }

    const newApp: Appointment = AppointmentRepository.create({
        date,
        time,
        user: foundUser,
    });

    await AppointmentRepository.save(newApp);

    return newApp;
}

const cancelAppointmentService = async (id: number) => {
    
    const foundApp: Appointment | null = await getAppointmentByIdService(id);

    if(!foundApp){
        return null;
    }

    foundApp.status = StatusAppointment.CANCELLED;
    await AppointmentRepository.save(foundApp);

    return true;

}

export { getAllAppointmentsService, getAppointmentByIdService, newAppointmentService, cancelAppointmentService };