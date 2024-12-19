import { Router } from "express";
import { getAllUsers, getUserById, registerNewUser, login } from "../controllers/users.controllers"

const router = Router();

router.get("/", getAllUsers );

router.get("/:id", getUserById)
router.post("/register", registerNewUser)
router.get("/login", login)

export default router;