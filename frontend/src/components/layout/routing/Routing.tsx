import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../not-found/NotFound";
import ServerList from "../../clientSide/serverList/ServerList";
import ServerStatus from "../../clientSide/serverList/ServerList";

export default function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/servers/list" />} />
            <Route path="/servers/list" element={<ServerList />} />
            <Route path="/servers/status/:serverId" element={<ServerStatus />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
