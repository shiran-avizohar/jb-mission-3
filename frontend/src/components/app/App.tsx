import { BrowserRouter } from 'react-router-dom';
import Layout from '../layout/layout/Layout';
import ServerList from '../clientSide/serverList/ServerList'; // Import the ServerList component
import './App.css';

export default function App(): JSX.Element {
    return (
        <div className="App">
            <BrowserRouter>
                <Layout />
                {/* Add ServerList here to render the list of servers */}
                <ServerList />
            </BrowserRouter>
        </div>
    );
}
