import { 
    AllowNull, 
    Column, 
    DataType, 
    Default, 
    HasMany,
    Model, 
    PrimaryKey, 
    Table 
} from "sequelize-typescript";
import Server from "./server";

@Table({
    underscored: true,
})
export default class Company extends Model{

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    companyId: string
    
    @AllowNull(false)
    @Column
    companyName: string

    @HasMany(() => Server)
    servers: Server[]
}
