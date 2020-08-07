import Knex from "knex";

// this is where you build the table, param knex: Knex required by knex
export async function up(knex: Knex) {
	return knex.schema.createTable("users", (table) => {
		table.increments('id').primary();
		table.string('name').notNullable();
		table.string('avatar').notNullable();
		table.string('whatsapp').notNullable();
		table.string('bio').notNullable();
	});
}

export async function down(knex: Knex) {
	return knex.schema.dropTable('users');
}
