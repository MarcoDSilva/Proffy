import knex from "knex";
import path from "path";

// migrations - control the version of the db
// path is imported to be easier to change between folders

const db = knex({
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "database.sqlite"),
  },
  useNullAsDefault: true, //by default sqlite3 needs to have this option activated
});

export default db;
