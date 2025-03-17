import { Sequelize } from "sequelize-typescript";
import config from 'config'
import Server from "../models/server";
import Company from "../models/company";

const logging = config.get<boolean>('sequelize.logging') ? console.log : false

const sequelize = new Sequelize({
    // [ add ALL model classes you created to the array ]:
    models: [ Company, Server ],
    dialect: 'mysql',
    ...config.get('db'),
    logging,
})

export default sequelize