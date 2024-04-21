import migrationRunner from "node-pg-migrate";
import { join } from "node:path";
import database from "infra/database";

export default async function migrations(request, response) {
  const dbClient = await database.getNewClient();

  const defaultMigrationsOptions = {
    dbClient: dbClient,
    migrationsTable: "pgmigrations",
    dir: join("infra", "migrations"),
    direction: "up",
    dryRun: true,
    verbose: true,
  };

  if (request.method === "GET") {
    console.log("Entrou no GET");
    const pendingMigrations = await migrationRunner(defaultMigrationsOptions);
    await dbClient.end();
    return response.status(200).json(pendingMigrations);
  }

  if (request.method === "POST") {
    console.log("Entrou no POST");
    const migratedMigrations = await migrationRunner({
      ...defaultMigrationsOptions,
      dryRun: false,
    });
    await dbClient.end();

    if (migratedMigrations.length > 0) {
      return response.status(201).json(migratedMigrations);
    }

    return response.status(200).json(migratedMigrations);
  }
}
