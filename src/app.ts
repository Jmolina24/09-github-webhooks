import express from 'express';
import { envs } from './config';
import { GithubController } from './presentation/github/controller';
import { GitHubSha256Middleware } from './middlewares/github-sha256.middleware';

(() => {
    main();
})();




function main() {


    const app = express();
    app.use(express.json());


    const controller = new GithubController();


    app.use(GitHubSha256Middleware.verifyGithubSignature)

    app.post('/api/github', controller.webhooksHandler);




    app.listen(envs.PORT, () => {
        console.log(`App runnning on port ${envs.PORT}`);
    })


}


