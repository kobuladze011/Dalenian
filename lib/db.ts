import mysql, { Pool } from "mysql2/promise";

type DbConfig = {
  host: string;
  user: string;
  password: string;
  database: string;
  port?: number;
};

const parseDatabaseUrl = (): DbConfig => {
  const url = process.env.DATABASE_URL;
  if (!url) {
    return {
      host: process.env.DB_HOST ?? "localhost",
      user: process.env.DB_USER ?? "root",
      password: process.env.DB_PASSWORD ?? "",
      database: process.env.DB_NAME ?? "dalenian",
      port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306
    };
  }

  const parsed = new URL(url);
  return {
    host: parsed.hostname,
    user: decodeURIComponent(parsed.username),
    password: decodeURIComponent(parsed.password),
    database: parsed.pathname.replace("/", ""),
    port: parsed.port ? Number(parsed.port) : 3306
  };
};

declare global {
  // eslint-disable-next-line no-var
  var mysqlPool: Pool | undefined;
}

export const getPool = () => {
  if (!global.mysqlPool) {
    const config = parseDatabaseUrl();
    global.mysqlPool = mysql.createPool({
      ...config,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
  }

  return global.mysqlPool;
};

export async function query<T>(sql: string, values?: unknown[]) {
  const [rows] = await getPool().query(sql, values);
  return rows as T;
}

