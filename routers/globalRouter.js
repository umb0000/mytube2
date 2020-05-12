import express from 'express';
import routes from '../routes';
import { home } from "../Controllers/videoController";
import { search } from "../Controllers/videoController";
import { join } from "../Controllers/userController";
import { login } from "../Controllers/userController";
import { logout } from "../Controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;