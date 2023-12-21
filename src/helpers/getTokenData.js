import jwt from "jsonwebtoken";
export const getTokenData = (req) => {
  const token = req.cookies.get("token")?.value || "";

  const decodedToken = jwt.verify(token, "yuyuyuio@");

  return decodedToken.id;
};
