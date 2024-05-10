const { createConnection } = require("mysql2/promise");

async function query(sql, params) {
  const connection = await createConnection({
    host: "localhost",
    user: "root",
    database: "mycontacts",
    password: "root",
  });

  const [results] = await connection.execute(sql, params);
  return results;
}

module.exports = { query };
