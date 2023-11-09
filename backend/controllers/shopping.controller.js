const { response } = require("express");
const { add, getAll, replace, remove } = require("../data/marcadores");

const shoppingGet = async (req, res = response) => {
  try {
    const data = await getAll();
    res.json({
      success: true,
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "something got error",
    });
  }
};

const shoppingPost = async (req, res = response) => {
  const { description, lat, long } = req.body;
  try {
    const response = await add({ description, lat, long });

    res.json({
      success: true,
      data: { id: response },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "something got error",
    });
  }
};

const shoppingPut = async (req, res = response) => {
  try {
    const { description, lat, long } = req.body;
    await replace(req.params.id, { description, lat, long });

    res.json({
      success: true,
      data: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "something got error",
    });
  }
};

const shoppingRemove = async (req, res = response) => {
  try {
    await remove(req.params.id);

    res.json({
      success: true,
      data: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "something got error",
    });
  }
};

module.exports = {
  shoppingGet,
  shoppingPost,
  shoppingPut,
  shoppingRemove,
};
