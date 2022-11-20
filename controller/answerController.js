"use strict";
const model = require("../data/date.json");
const getAnswer = require("../utils/getAnswer");

const answerController = (req, res, next) => {
  try {
    const ans = getAnswer(new Date(), model.HK);

    res.status(200).render("pages/index", {
      ans,
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

module.exports = answerController;
