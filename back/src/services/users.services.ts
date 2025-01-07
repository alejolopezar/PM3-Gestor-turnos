import { newUserDataDTO } from "../dto/newUserDataDTO";
import { createUserCredentialsService } from "./credentials.services";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";
import { Credential } from "../entities/Credentials";

const UserRepository = AppDataSource.getRepository(User);

const getAllUsersService = async (): Promise<User[]> => {
    const allUsers = await UserRepository.find({
        relations: { appointments: true },
    });

    return allUsers;
};

const getUserByIdService = async (id: number): Promise<User | null> => {
    const foundUser = await UserRepository.findOne({
        where: { id },
        relations: ["credentials", "appointments"],
    });

    return foundUser;
};

const createNewUserService = async (dataUser: newUserDataDTO) => {
    const { name, email, birthdate, nDni, username, password } = dataUser;

    const newCredentials: Credential = await createUserCredentialsService({
        username,
        password,
    });

    const newUser: User = UserRepository.create({
        name,
        email,
        birthdate,
        nDni,
        credentials: newCredentials,
    });

    //Establecer la referencia de la bidireccionalidad
    newCredentials.user = newUser;

    await UserRepository.save(newUser)
    await AppDataSource.getRepository(Credential).save(newCredentials)

    return newUser;
};

export { getAllUsersService, getUserByIdService, createNewUserService };