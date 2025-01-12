import { Request, Response } from "express";
import { 
    createNewUserService,
    getAllUsersService,
    getUserByIdService,
} from "../services/users.services";
import { checkCredentialsService } from "../services/credentials.services";

const getAllUsers = async (req: Request, res: Response) => {
 const allUsers = await getAllUsersService();
 res
    .status(200)
    .json(allUsers);
    return;
}

const getUserById = async (req: Request, res: Response) => {

try{
    const { id } = req.params;

    const user = await getUserByIdService(+id);

    if(user){
        res.status(200).json(user);
        return;
    } else {
        res
        .status(404)
        .json({
            message: "El usuario no existe",
        });
        return;
    }
} catch (error){
    res.status(500).json({message: "Error en el servidor", error});
    return;
}
};

const registerNewUser = async (req: Request, res: Response) => {
    try {
        const { name, email, birthdate, nDni, username, password } = req.body;

        if(!name || !email ||!birthdate || !nDni || !username || !password){
            res.status(400).json({error: "Datos incompletos"})
            return;
        }

        const newUser = await createNewUserService({
            name,
            email,
            birthdate,
            nDni,
            username,
            password,
        });
    
        res
        .status(201)
        .json({
            success: true, newUser
        });
        return;
    } catch(error) {
        res.status(500).json({message: "Error en el servidor", error});
    }
    
}

const login = async (req: Request, res: Response) => {
    try{
        const { username, password } = req.body;
    
        const logged = await checkCredentialsService({ username, password });
    
        if (logged) {
            res
            .status(200)
            .json({
                login: true, user: logged
            });
            return;
        } else {
            res
            .status(400)
            .json({
                login: false
            });
            return;
        }
    } catch(error){
        res.status(500).json({message: "Error en el servidor", error});
    }
};

export { getAllUsers, getUserById, registerNewUser, login };