import { Request, Response } from "express";
import { 
    cancelAppointmentService,
    getAllAppointmentsService,
    getAppointmentByIdService,
    newAppointmentService,
} from "../services/appointments.services";

const getAllAppointments = async (req: Request, res: Response) => {
    try {
        const allApp = await getAllAppointmentsService();

        if (allApp.length) {
            res
            .status(200)
            .json(allApp);
            return;
        } else {
            res
        .status(404)
        .json({ message: "No hay turnos registrados"});
        return;
        }
        
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error });
        return;
    }
    
};

const getAppointmentById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

    const app = await getAppointmentByIdService(+id);

    if(app){
        res.status(200).json(app);
        return;
    } else {
        res
        .status(404)
        .json({
            message: "El turno no existe",
        });
        return;
    }
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error });
        return;
    }
    
};

const createNewAppointment = async (req: Request, res: Response) => {
    try {
        const { date, time, userId } = req.body;

        if(!date || !time || userId ){
            res.status(400).json({ error: "Datos incompletos"});
            return;
        }
        const newApp = await newAppointmentService({ date, time, userId })

        if(!newApp){
            res.status(400).json({
                message: "El usuario no existe",
            });
            return;
        } else {
            res
            .status(201)
            .json({
                message: "Turno creado",
                newApp,
            });
        }
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error });
        return;
    }
    

    
};

const cancelAppointment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

    const response = await cancelAppointmentService(+id);
    
    if(response){
        res.status(200).json({
            message: "Turno cancelado",
        });
        return;
    } else {
        res
        .status(404)
        .json({
            message: "El turno no existe",
        });
        return;
    }
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error });
        return;
    }
    
};

export { getAllAppointments, getAppointmentById, createNewAppointment, cancelAppointment };