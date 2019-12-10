exports.up = function(knex) {
  // Always return
  return knex.schema.createTable("fruits", table => {
    // primary key
    table.increments();
    table
      .string("name", 255)
      .notNullable()
      .unique()
      .index();
    table.float("avg_weight_in_oz");
    table.boolean("in_season").defaultTo(true);
    table.timestamps();
  });
};

// Describes how to revert changes
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("fruits");
};
