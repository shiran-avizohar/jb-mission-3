import { NextFunction, Request, RequestHandler, Response } from "express";
import Server from "../../models/server";
import Company from "../../models/company";

// Function to retrieve all data
export async function getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const servers = await Server.findAll({
            include: [{
                model: Company,
                attributes: ["companyName"], // Include the company name from the Company model
            }]
        });
        res.json(servers); // Return the list of servers in JSON format
    } catch (e) {
        next(e); // Pass any error to the next middleware
    }
}

// The function to update the server status
export const updateStatus: RequestHandler = async (req, res, next): Promise<void> => {
    try {
        const { serverId } = req.params;  // Get the serverId from the request parameters
        const server = await Server.findByPk(serverId); // Find the server by its primary key

        if (!server) {
            res.status(404).json({ message: "Server not found" }); // Return an error if the server is not found
            return;
        }

        server.status = server.status === "Active" ? "Inactive" : "Active"; // Toggle the server status
        await server.save(); // Save the updated server status to the database

        res.json({ message: "Status updated successfully", server }); // Return a success message and the updated server
    } catch (e) {
        next(e); // Pass any error to the next middleware
    }
};
