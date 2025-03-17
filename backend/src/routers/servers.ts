import { Router } from "express";
import { getAll, updateStatus } from "../../../backend/src/controllers/servers/controller"

const router = Router();

// Endpoint to get all servers along with their companies
router.get("/servers", getAll);

// Endpoint to update the server status (Active/Inactive)
router.post("/server/status/:serverId", updateStatus);

export default router;
