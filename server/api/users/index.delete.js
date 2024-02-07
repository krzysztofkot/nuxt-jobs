import db from "@/models/index.js";

export default defineEventHandler(async event => {
  const { email } = await readBody(event);
  const user = db.Users.destroy({ where: { email } });
  return user;
});
