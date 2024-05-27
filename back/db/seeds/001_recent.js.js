/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("account_book").del();
  await knex("account_book").insert([
    {
      id: 1,
      date: "2024-05-22",
      item: "party",
      amount: -4000,
      classify: "Entertainment expenses",
    },
    { id: 2, date: "2024-05-23", item: "egg", amount: -300, classify: "Food" },
    {
      id: 3,
      date: "2024-05-24",
      item: "cable",
      amount: -1000,
      classify: "Daily necessities",
    },
    { id: 4, date: "2024-05-25", item: "fish", amount: -300, classify: "Food" },
    {
      id: 5,
      date: "2024-05-26",
      item: "allowance",
      amount: 10000,
      classify: "Income",
    },
    { id: 6, date: "2024-05-26", item: "milk", amount: -200, classify: "Food" },
  ]);
};
