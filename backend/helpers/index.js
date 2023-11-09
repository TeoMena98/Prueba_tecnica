const jwt = require("jsonwebtoken");

const generarJWT = (mail = "") => {
  return new Promise((resolve, reject) => {
    const payload = { mail };

    jwt.sign(
      payload,
      process.env.SECRET,
      {
        expiresIn: "4h",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("Could not generate token");
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = {
  generarJWT,
};
