import { Router } from "express";
import { getUsers, createUser, deleteUser, updateUser, getUser } from "../controllers/userController";

const router = Router();

require('./user.swagger');

router.get('/', getUsers);

router.get('/:id', getUser);

router.post('/', createUser); 

router.delete('/:id', deleteUser); 

router.patch('/:id', updateUser);

export const routerUser = router;