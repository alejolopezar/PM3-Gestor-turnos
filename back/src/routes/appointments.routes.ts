import { Router } from "express";
import { cancelAppointment, createNewAppointment, getAllAppointments, getAppointmentById } from "../controllers/appointments.controllers"

const router = Router();

router.get("/", getAllAppointments );
router.get("/:id", getAppointmentById)
router.post("/schedule", createNewAppointment)
router.put("/cancel/:id", cancelAppointment)

export default router;