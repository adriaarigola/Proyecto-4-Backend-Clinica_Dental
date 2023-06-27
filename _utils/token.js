const jwt = require("jsonwebtoken");

// generate token
const generateToken = (payload) =>
   jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
   });

// export token
const getTokenFromHeader = (headers) => {
   const { authorization } = headers;

   if (!authorization) return null;
   else return authorization.split(" ")[1];
};

// decodificar token
const decodedToken = (token) => jwt.verify(token, process.env.JWT_SECRET);

module.exports = {
   generateToken,
   getTokenFromHeader,
   decodedToken,
};