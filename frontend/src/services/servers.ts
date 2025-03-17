import Server from "../models/server/Server";
import axios from 'axios';

class Servers {

    // Function to retrieve all servers + companies
    async getAll(): Promise<Server[]> {
        const response = await axios.get<Server[]>(`${import.meta.env.VITE_REST_SERVER_URL}/api/servers`);
        const servers = response.data;
        return servers;
    }

    // Function to update the server status
    async updateServerStatus(serverId: string): Promise<Server> {
        const response = await axios.post<Server>(`${import.meta.env.VITE_REST_SERVER_URL}/api/server/status/${serverId}`);
        const updatedServer = response.data;
        return updatedServer;
    }
}

const serversService = new Servers();
export default serversService;
