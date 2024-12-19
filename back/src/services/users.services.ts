import { newUserDataDTO } from "../dto/newUserDataDTO";
import IUser from "../interfaces/User";
import { createUserCredentialsService } from "./credentials.services";

const usersDB: IUser[] = [];
let id = 1;

const getAllUsersService = async (): Promise<IUser[]> => {
    return usersDB;
};

const getUserByIdService = async (id: number): Promise<IUser | undefined> => {
    const foundUser = usersDB.find((user) => user.id === id);

    return foundUser;
};

const createNewUserService = async (dataUser: newUserDataDTO) => {
    const { name, email, birthdate, nDni, username, password } = dataUser;

    const idCredentials = await createUserCredentialsService({
        username,
        password,
    });

    const newUser: IUser = {
        id,
        name,
        email,
        birthdate,
        nDni,
        credentialsId: idCredentials,
    };

    usersDB.push(newUser);
    id++;

    return newUser;
};

export { getAllUsersService, getUserByIdService, createNewUserService };