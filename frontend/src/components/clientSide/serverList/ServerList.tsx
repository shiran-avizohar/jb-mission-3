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
  const [servers, setServers] = useState<Server[]>([]); // State for storing servers data
  const [loading, setLoading] = useState<boolean>(true); // State for loading indicator
  const [error, setError] = useState<string | null>(null); // State for error messages

  useEffect(() => {
    const fetchServers = async () => {
      try {
        const response = await axios.get<Server[]>(`${import.meta.env.VITE_REST_SERVER_URL}/servers`);
        setServers(response.data); // Set servers data
        setLoading(false); // Data loaded
      } catch {
        setError('Error loading servers'); // Set error message
        setLoading(false); // Data loading finished
      }
    };

    fetchServers(); // Call the function to fetch servers
  }, []); // Empty dependency array to run only once when component mounts

  const sortedServers = servers.sort((a, b) => {
    const dateA = new Date(a.creationTime);
    const dateB = new Date(b.creationTime);
    return dateB.getTime() - dateA.getTime(); // Sorting servers by creation date (descending)
  });

  if (loading) {
    return <div>Loading...</div>; // Display loading message while data is being fetched
  }

  if (error) {
    return <div>{error}</div>; // Display error message if any error occurs
  }

  return (
    <div>
      <h1>Server List</h1>
      <div>
        {sortedServers.length === 0 ? (
          <p>No servers found</p> // Show message if no servers are found
        ) : (
          sortedServers.map((server) => (
            <ServerCard key={server.serverId} server={server} /> // Map through servers and display ServerCard component
          ))
        )}
      </div>
    </div>
  );
};

export default ServerList;
