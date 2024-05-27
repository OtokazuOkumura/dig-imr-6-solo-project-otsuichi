/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("account_book", (t) => {
    t.increments("id").primary();
    t.date("date");
    t.string("item", 256);
    t.integer("amount");
    t.string("classify", 256);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("account_book");
};
