import { NextFunction, Request, RequestHandler, Response } from "express";
import Server from "../../models/server";
import Company from "../../models/company";

// פונקציה לשליפת כל השרתים
export async function getAll(req: Request, res: Response, next: NextFunction) {
    console.log(11)
    try {
        // שולף את כל השרתים עם שם החברה שלהם
        const servers = await Server.findAll({
            include: [{
                model: Company, // מצרף את המידע מטבלת החברות
                attributes: ["companyName"], // מחזיר רק את שם החברה
            }]
        });
        res.json(servers); // מחזיר את כל המידע ב-JSON
    } catch (e) {
        next(e); // טיפול בשגיאות
    }
}

// הפונקציה לעדכון סטטוס השרת
export const updateStatus: RequestHandler = async (req, res, next): Promise<void> => {
    try {
        const { serverId } = req.params;  // קבלת מזהה השרת
        const server = await Server.findByPk(serverId);  // חיפוש השרת בבסיס הנתונים

        if (!server) {
            res.status(404).json({ message: "Server not found" });
            return;
        }

        // עדכון סטטוס השרת
        server.status = server.status === "Active" ? "Inactive" : "Active";
        await server.save(); // שמירת השינויים

        res.json({ message: "Status updated successfully", server }); // החזרת הודעה
    } catch (e) {
        next(e); // טיפול בשגיאות
    }
};