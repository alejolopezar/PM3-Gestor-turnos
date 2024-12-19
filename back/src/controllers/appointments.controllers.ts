import { Request, Response } from "express";

const getAllAppointments = async (req: Request, res: Response) => {
 res
    .status(200)
    .json({
        message: "Esta ruta devolverá a todos los turnos registrados en la app",
    });
    return;
};

const getAppointmentById = (req: Request, res: Response) => {
    res
    .status(200)
    .json({
        message: "Esta ruta devolverá un turno por ID",
    });
};

const createNewAppointment = (req: Request, res: Response) => {
    res
    .status(200)
    .json({
        message: "Esta ruta creara un nuevo turno",
    });
};

const cancelAppointment = (req: Request, res: Response) => {
    res
    .status(200)
    .json({
        message: "Esta ruta creara un nuevo turno",
    });
};

export { getAllAppointments, getAppointmentById, createNewAppointment, cancelAppointment };