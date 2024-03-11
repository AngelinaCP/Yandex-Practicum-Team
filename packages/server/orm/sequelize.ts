import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import path from 'path'
import 'dotenv/config'

const {
  POSTGRES_PORT: port = 5432,
  POSTGRES_DB: database,
  POSTGRES_USERNAME: username,
  POSTGRES_PASSWORD: password,
  POSTGRES_SERVICE_NAME: host,
} = process.env

console.log(process.env)

const models = resolveModelsPaths(['models/**'])

const sequelizeOptions: SequelizeOptions = {
  dialect: 'postgres',
  models,
  port: +port,
  database,
  username,
  password,
  host,
}

console.log(sequelizeOptions)

export const sequelize = new Sequelize(sequelizeOptions)

function resolveModelsPaths(pathsToModels: string[]) {
  return pathsToModels.map(pathToModel => path.resolve(__dirname, pathToModel))
}
