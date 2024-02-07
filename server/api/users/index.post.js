import db from "@/models/index.js";

export default defineEventHandler(async event => {
  const body = await readBody(event);
  console.log(body);
  const user = await db.Users.create({ ...body, isVerified: true });
  setResponseStatus(event, 201);
  return user;
});
