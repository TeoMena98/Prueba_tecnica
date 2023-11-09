const { response } = require("express");
const salesGet = async (req, res = response) => {
  try {
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];
    
    const items = months.map((month) => ({
      month,
      amountEstate: getRandomNumber(1, 150),
      totalSales: getRandomNumber(50000, 10000000),
    }));

    res.json({
      success: true,
      data: {
        items,
        totalItems: months.length,
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
  salesGet,
};
