
export default interface Server {
    serverId: string
    serverName: string
    ip: string
    companyName: string;
    companyId: string
    status: 'Active' | 'Inactive'
    creationTime: Date
}