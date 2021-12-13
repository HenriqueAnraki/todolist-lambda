import { ConnectionOptions, DatabaseType } from "typeorm";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

type EnvConnection = {
  type: "mysql" | "mariadb";
  host: string;
  port: unknown;
  username: string;
  password: string;
  database: string;
};

// export const envConnection: EnvConnection = {
export const envConnection: MysqlConnectionOptions = {
  // type: process.env.DB_TYPE as DatabaseType,
  type: process.env.DB_TYPE as "mysql" | "mariadb",
  host: process.env.DB_HOST as string,
  port: process.env.DB_PORT as unknown as number,
  username: process.env.DB_USERNAME as string,
  password: process.env.DB_PASSWORD as string,
  database: process.env.DB_NAME as string,

  // region: process.env.DB_REGION as string,
  // secretArn: process.env.DB_SECRETARN as string,
  // resourceArn: process.env.DB_RESOURCEARN as string,
};
