import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("lessons", (table) => {
    table.increments("id").primary();
    table.string("subject").notNullable();
    table.decimal("cost").notNullable();

    // relation user_id with this_lesson
    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE") // cascade makes it delete all relational lessons this user lectures
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("lessons");
}
