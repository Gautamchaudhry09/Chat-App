import express from "express";
import { UserController } from "../controller/UserController.js";
import { ConversationController } from "../controller/ConversationController.js";
import { MessageController } from "../controller/MessageController.js";
import { ImageController } from "../controller/ImageController.js";

const router = express.Router();

router.post('/add',UserController.addUser);
router.get('/users',UserController.getUsers);
router.post('/conversation/add',ConversationController.newConversation)
router.post('/conversation/get',ConversationController.getConversation)
router.post('/message/add',MessageController.newMessage);
router.get('/message/get/:id',MessageController.getMessages);
router.post('/file/upload',upload.single("file"),ImageController.uploadFile);
export default router;