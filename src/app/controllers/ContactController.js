const db = require("../../database");

class ContactController {
  async index(request, response) {
    const rows = await db.query("SELECT * FROM contacts");

    response.json(rows);
  }

  async show(request, response) {
    const { id } = request.params;

    const [row] = await db.query(`SELECT * FROM contacts WHERE id = ${id}`);

    response.json(row);
  }

  async create(request, response) {
    const { name, email, phone } = request.body;

    await db.query(
      `INSERT INTO contacts(name, email, phone) VALUES('${name}', '${email}', '${phone}')`
    );

    return response
      .status(201)
      .json({ message: "New record created successfully" });
  }

  async update(request, response) {
    const { name, email, phone } = request.body;
    const { id } = request.params;

    await db.query(
      `UPDATE contacts SET name = '${name}', email = '${email}', phone = '${phone}' WHERE id = ${id} LIMIT 1`
    );

    return response
      .status(200)
      .json({ message: "Registry changed successfully" });
  }

  async delete(request, response) {
    const { id } = request.params;

    await db.query(`DELETE FROM contacts WHERE id = ${id} LIMIT 1`);

    return response.sendStatus(204);
  }
}

module.exports = new ContactController();
