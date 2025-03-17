import Server from "../models/server/Server";
import axios from 'axios';

class Servers {

    // פונקציה לשליפת כל השרתים + החברות
    async getAll(): Promise<Server[]> {
        const response = await axios.get<Server[]>(`${import.meta.env.VITE_REST_SERVER_URL}/api/servers`);
        const servers = response.data;
        return servers;
    }

    // פונקציה לעדכון סטטוס השרת
    async updateServerStatus(serverId: string): Promise<Server> {
        const response = await axios.post<Server>(`${import.meta.env.VITE_REST_SERVER_URL}/api/server/status/${serverId}`);
        const updatedServer = response.data;
        return updatedServer;
    }
}

const serversService = new Servers();
export default serversService;
