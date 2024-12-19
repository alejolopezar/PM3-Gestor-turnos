import { Request, Response } from "express";

const getAllUsers = async (req: Request, res: Response) => {
 res
    .status(200)
    .json({
        message: "Esta ruta devolverá a todos los usuarios registrados en la app",
    });
}

const getUserById = (req: Request, res: Response) => {
    res
    .status(200)
    .json({
        message: "Esta ruta devolverá un usuario por ID",
    });
}

const registerNewUser = (req: Request, res: Response) => {
    res
    .status(200)
    .json({
        message: "Esta ruta creara un nuevo usuario",
    });
}

const login = (req: Request, res: Response) => {
    res
    .status(200)
    .json({
        message: "Esta ruta logueara a los usuarios registrados",
    });
}

export { getAllUsers, getUserById, registerNewUser, login };