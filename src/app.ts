import { envs } from "./config/envs";
import { Server } from "./presentation/Server";

(() => {
    main();
})();

function main() {
    const server = new Server({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    });

    server.start();
    // console.log(envs)
}