const { response } = require("express");
const { generarJWT } = require("../helpers/index");

const loginPost = async (req, res = response) => {
  const { mail } = req.body;

  try {
    const token = await generarJWT(mail);

    res.json({
      success: true,
      data: {
        token,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "something got error",
    });
  }
};

module.exports = {
  loginPost,
};
