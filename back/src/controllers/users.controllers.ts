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
    const { id } = req.params;

    const user = await getUserByIdService(+id);

    if(user){
        res.status(200).json(user);
        return;
    } else {
        res
        .status(400)
        .json({
            message: "El usuario no existe",
        });
        return;
    }
};

const registerNewUser = async (req: Request, res: Response) => {
    const { name, email, birthdate, nDni, username, password } = req.body;
    
    const newUser = await createNewUserService({
        name,
        email,
        birthdate,
        nDni,
        username,
        password,
    });

    res
    .status(200)
    .json({
        success: true, newUser
    });
    return;
}

const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const logged = await checkCredentialsService({ username, password });

    if (logged) {
        res
        .status(200)
        .json({
            login: true
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
};

export { getAllUsers, getUserById, registerNewUser, login };