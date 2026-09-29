import { envs } from "./config/plugins/envs.plugin.js";
import { MongoDatabase } from "./data/index.js";
import { AppRoutes } from "./presentation/routes.js";
import { Server } from "./presentation/server.js";

(async () => {
    await main();
})();

async function main() {

    await MongoDatabase.connect({
        dbName: envs.MONGO_DB_NAME,
        mongoUrl: envs.MONGO_URL
    })

    const server = new Server(
        envs.PORT,
        AppRoutes.routes,
    );

    server.start();
}