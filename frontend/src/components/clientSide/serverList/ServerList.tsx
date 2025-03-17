import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ServerCard from '../serverCard/ServerCard';

interface Server {
  serverId: string;
  serverName: string;
  ip: string;
  companyName: string;
  companyId: string;
  status: 'Active' | 'Inactive';
  creationTime: string;
}

const ServerList: React.FC = () => {
  const [servers, setServers] = useState<Server[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServers = async () => {
      try {
        const response = await axios.get<Server[]>(
          `${import.meta.env.VITE_REST_SERVER_URL}/servers`
        );
        setServers(response.data);
        setLoading(false);
      } catch {
        setError('Error loading servers');
        setLoading(false);
      }
    };

    fetchServers();
  }, []);

  const sortedServers = servers.sort((a, b) => {
    const dateA = new Date(a.creationTime);
    const dateB = new Date(b.creationTime);
    return dateB.getTime() - dateA.getTime(); // סידור יורד
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Server List</h1>
      <div>
        {sortedServers.length === 0 ? (
          <p>No servers found</p>
        ) : (
          sortedServers.map((server) => (
            <ServerCard key={server.serverId} server={server} />
          ))
        )}
      </div>
    </div>
  );
};

export default ServerList;
