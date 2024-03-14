import database from "infra/database";
import migrationRunner from "node-pg-migrate";
import { join } from "node:path";

export default async function migrations(request, response) {
  if (request.method === "GET") {
    console.log("Entrou no GET")
    const migrations = await migrationRunner({
      databaseUrl: process.env.DATABASE_URL,
      migrationsTable: "pgmigrations",
      dir: join("infra", "migrations"),
      direction: "up",
      dryRun: true,
      verbose: true,
    });
    return response.status(200).json(migrations);
  }

  if (request.method === "POST") {
    console.log("Entrou no POST")
    const migrations = await migrationRunner({

      databaseUrl: process.env.DATABASE_URL,
      migrationsTable: "pgmigrations",
      dir: join("infra", "migrations"),
      direction: "up",
      dryRun: false,
      verbose: true,
    });
    return response.status(200).json(migrations);
  }

  
  return response.status(404).end();
}
