import { userCredentialsDTO } from "../dto/userCredentialsDTO"
import ICredential from "../interfaces/Credential"

const credentialsDB: ICredential[] = [];
let id: number = 1;

const createUserCredentialsService = async (
    credentials: userCredentialsDTO
): Promise<number> => {
    const { username, password } = credentials;

    const newCreds: ICredential = {
        id,
        username,
        password,
    };

    credentialsDB.push(newCreds);
    id++;

    return newCreds.id;
};

const checkCredentialsService = async (
    credentials: userCredentialsDTO
): Promise<number> => {
    const { username, password } = credentials;

    const foundCredentials = credentialsDB.find(
        (cred) => cred.username === username
    );

    if (foundCredentials?.password === password) return foundCredentials.id;
    return 0;
};

export { createUserCredentialsService, checkCredentialsService };