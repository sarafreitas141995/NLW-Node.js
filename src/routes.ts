import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { createTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();
const createUserController = new CreateUserController();
const creatTagController = new createTagController();

router.post("/users", createUserController.handle )
router.post("/tags", ensureAdmin , creatTagController.handle )




export {router}