import { Request, Response } from "express";
import { 
    cancelAppointmentService,
    getAllAppointmentsService,
    getAppointmentByIdService,
    newAppointmentService,
} from "../services/appointments.services";

const getAllAppointments = async (req: Request, res: Response) => {
    const allApp = await getAllAppointmentsService();
    res
    .status(200)
    .json(allApp);
    return;
};

const getAppointmentById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const app = await getAppointmentByIdService(+id);

    if(app){
        res.status(200).json(app);
        return;
    } else {
        res
        .status(400)
        .json({
            message: "El turno no existe",
        });
        return;
    }
};

const createNewAppointment = async (req: Request, res: Response) => {
    const { date, time, userId } = req.body;

    const newApp = await newAppointmentService({ date, time, userId })

    if(!newApp){
        res.status(400).json({
            message: "El usuario no existe",
        });
        return;
    } else {
        res
        .status(200)
        .json({
            message: "Turno creado",
            newApp,
        });
    }
};

const cancelAppointment = async (req: Request, res: Response) => {
    const { id } = req.params;

    const response = await cancelAppointmentService(+id);
    
    if(response){
        res.status(200).json({
            message: "Turno cancelado",
        });
        return;
    } else {
        res
        .status(400)
        .json({
            message: "El turno no existe",
        });
        return;
    }
};

export { getAllAppointments, getAppointmentById, createNewAppointment, cancelAppointment };