import jwt from "jsonwebtoken";

function createToken(user) {
  const payload = {
    _id: user._id,
    email: user.email,
    name: user.name,
  };

  const token = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: "30 days",
  });
  return token;
}

function validateToken(token) {
  const payload = jwt.verify(token, process.env.SECRET_KEY);
  return payload;
}

export { createToken, validateToken };
