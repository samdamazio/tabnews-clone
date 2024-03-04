import database from "infra/database";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum");
  response.status(200).json({ chave: "valor" });
  console.log(result.rows);
}

export default status;