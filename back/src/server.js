const express = require("express");
const app = express();

const config = require("../knexfile");
const knex = require("knex")(config);

app.use(express.json());
app.use("/", express.static(__dirname + "/../../front/dist"));

app.get("/api/list/", async (req, res) => {
  const account_list = await knex.select().from("account_book");
  console.log(new Date().toString(), "\n---account_list---\n", account_list);
  res.send(account_list);
});

app.post("/api/record/", (req, res) => {
  console.log(new Date().toString(), "\n---req.body---\n", req.body);
  res.end();
  // await knex("account_book")
  //   .insert(req.body)
  //   .then((result) => {});
  // const account_list = await knex.select().from("account_book");
  // console.log(new Date().toString(), "---\n", account_list);
  // res.status(201).end();
});

app.listen(3000, () => {
  console.log(
    new Date().toString(),
    "\n---server works on http://localhost:3000---\n"
  );
});
