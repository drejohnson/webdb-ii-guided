exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("veggies")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("veggies").insert([
        { name: "kale" },
        { name: "broccoli" },
        { name: "cabbage" }
      ]);
    });
};
