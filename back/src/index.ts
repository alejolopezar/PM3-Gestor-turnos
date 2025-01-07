import { initializeDataSource } from "./config/data-source";
import server from "./server";
import { PORT } from "./config/envs"

try {
    server.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
} catch (error) {
    console.log(error);
}

initializeDataSource();