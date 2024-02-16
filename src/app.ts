import { envs } from "./config";
import { Server } from "./presentation";
import { AppRoutes } from "./presentation/routes";

(
    () => {
      main();
    }
)()

async function main(){
    //TODO: await base de datos

    //TODO: inicio de nuestro server
    new Server({
        port: envs.PORT,
        routes: AppRoutes.routes
    }).start()
}