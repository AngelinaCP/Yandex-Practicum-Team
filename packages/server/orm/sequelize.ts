import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import path from 'path'
import 'dotenv/config'

/* const {
  POSTGRES_HOST: host,
  POSTGRES_PORT: port = 5432,
  POSTGRES_DB: database,
  POSTGRES_USER: username,
  POSTGRES_PASSWORD: password,
} = process.env

console.log(process.env) */

const models = resolveModelsPaths(['models/**'])

const sequelizeOptions: SequelizeOptions = {
  dialect: 'postgres',
  models,
  port: 5432,
  database: 'yandexteam',
  username: 'user',
  password: 'newPassword',
}

console.log(sequelizeOptions)

export const sequelize = new Sequelize(sequelizeOptions)

function resolveModelsPaths(pathsToModels: string[]) {
  return pathsToModels.map(pathToModel => path.resolve(__dirname, pathToModel))
}
