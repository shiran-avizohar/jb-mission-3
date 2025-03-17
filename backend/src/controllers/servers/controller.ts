import { NextFunction, Request, RequestHandler, Response } from "express";
import Server from "../../models/server";
import Company from "../../models/company";

// Function to retrieve all data
export async function getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const servers = await Server.findAll({
            include: [{
                model: Company,
                attributes: ["companyName"], 
            }]
        });
        res.json(servers); 
    } catch (e) {
        next(e); 
    }
}
// The function to update the server status

export const updateStatus: RequestHandler = async (req, res, next): Promise<void> => {
    try {
        const { serverId } = req.params;  
        const server = await Server.findByPk(serverId);

        if (!server) {
            res.status(404).json({ message: "Server not found" });
            return;
        }


        server.status = server.status === "Active" ? "Inactive" : "Active";
        await server.save(); 

        res.json({ message: "Status updated successfully", server }); // החזרת הודעה
    } catch (e) {
        next(e); 
    }
};