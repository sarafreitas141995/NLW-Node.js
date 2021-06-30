import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { createTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUseController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController}  from "./controllers/CreateComplimentController";

const router = Router();
const createUserController = new CreateUserController();
const creatTagController = new createTagController();
const authenticateUseController = new AuthenticateUseController();
const complimentController = new CreateComplimentController();

router.post("/users", createUserController.handle )
router.post("/tags", ensureAdmin , creatTagController.handle )
router.post("/login", authenticateUseController.handle)
router.post("/compliment", complimentController.handle)




export {router}