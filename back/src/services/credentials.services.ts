import { userCredentialsDTO } from "../dto/userCredentialsDTO"
import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credentials";
import { User } from "../entities/User";

const CredentialsRepository = AppDataSource.getRepository(Credential)

const createUserCredentialsService = async (
    credentials: userCredentialsDTO
): Promise<Credential> => {
    const { username, password } = credentials;

    const newCreds: Credential = CredentialsRepository.create({
        username,
        password,
    })

    await CredentialsRepository.save(newCreds)

    return newCreds;
};

const checkCredentialsService = async (
    credentials: userCredentialsDTO
): Promise<null | User> => {
    const { username, password } = credentials;

    const foundCredentials = await CredentialsRepository.findOne({
        where: { username },
        relations:["user"]
    });
    console.log(foundCredentials);
    if (foundCredentials?.password === password) return foundCredentials.user;
    else return null;
};

export { createUserCredentialsService, checkCredentialsService };