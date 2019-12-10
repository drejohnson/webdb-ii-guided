// Describes what will be done
exports.up = function(knex) {
  // Always return
  return knex.schema.createTable("veggies", table => {
    // primary key
    table.increments();
    table
      .string("name", 255)
      .notNullable()
      .unique()
      .index(); // fast searching faster
    table.boolean("in_season").defaultTo(true);
    table.timestamps();
  });
};

// Describes how to revert changes
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("veggies");
};
