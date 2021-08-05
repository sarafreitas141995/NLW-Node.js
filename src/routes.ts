import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { createTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUseController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController}  from "./controllers/CreateComplimentController";
import { ListUserReceivedComplimentsController}  from "./controllers/ListUserReceivedComplimentsController";
import { ListUserSendeComplimentsController}  from "./controllers/ListUserSendeComplimentsController";
import { ListTagsController}  from "./controllers/ListTagsController";
import { ListUsersController}  from "./controllers/ListUsersController";
import { SendEmailController}  from "./controllers/SendEmailController";



import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();
const createUserController = new CreateUserController();
const creatTagController = new createTagController();
const authenticateUseController = new AuthenticateUseController();
const complimentController = new CreateComplimentController();
const senderController = new ListUserSendeComplimentsController();
const receivedController = new ListUserReceivedComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();
const sendEmailController = new SendEmailController();



router.post("/users", createUserController.handle )
router.post("/tags", ensureAuthenticated, ensureAdmin , creatTagController.handle )
router.post("/login", authenticateUseController.handle)
router.post("/compliment", ensureAuthenticated ,complimentController.handle)

router.get("/users/compliments/send", ensureAuthenticated,senderController.handle)
router.get("/users/compliments/receive",ensureAuthenticated, receivedController.handle)
router.get("/tags",ensureAuthenticated, listTagsController.handle)
router.get("/users",ensureAuthenticated, listUsersController.handle)

//router.post("/emails", sendEmailController.handle)






export {router}