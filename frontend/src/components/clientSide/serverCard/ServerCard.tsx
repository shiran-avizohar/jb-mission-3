// ServerCard.tsx
import React from 'react'

// טיפוס ה-Server שהולך להיות Prop ב-ServerCard
interface Server {
    serverId: string;
    serverName: string;
    ip: string;
    companyName: string;
    status: "Active" | "Inactive";  // ערכים מוגבלים
    creationTime: string;
    companyId: string;
}

// טיפוס ה-Props של ServerCard
interface ServerCardProps {
    server: Server;
}

const ServerCard: React.FC<ServerCardProps> = ({ server }) => {
    return (
        <div className="server-card">
            <h2>{server.serverName}</h2>
            <p><strong>IP:</strong> {server.ip}</p>
            <p><strong>Status:</strong> {server.status}</p>
            <p><strong>Company:</strong> {server.companyName}</p>
            <p><strong>Company ID:</strong> {server.companyId}</p>
            <p><strong>Created At:</strong> {server.creationTime}</p>
        </div>
    );
}

export default ServerCard;
