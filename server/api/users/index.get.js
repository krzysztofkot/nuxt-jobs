import db from "@/models/index.js";

export default defineEventHandler(event => {
  console.log("got it!");
  return db.Users.findAll();
});
