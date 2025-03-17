import { 
    AllowNull, 
    BelongsTo, 
    Column, 
    DataType, 
    Default, 
    ForeignKey, 
    Model, 
    PrimaryKey, 
    Table 
} from "sequelize-typescript";
import Company from "./company";

@Table({
    underscored: true,
})
export default class Server extends Model{

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    serverId: string

    @AllowNull(false)
    @Column
    serverName: string
    
    @AllowNull(false)
    @Column
    ip: string

    @ForeignKey(() => Company)
    @AllowNull(false)
    @Column({ type: DataType.UUID, field: "Hosting Company" })
    companyId: string

    @AllowNull(false)
    @Column(DataType.ENUM("Active", "Inactive"))
    status: string

    @AllowNull(false)
    @Column(DataType.DATE)
    creationTime: Date

    @BelongsTo(() => Company)
    company: Company

}
