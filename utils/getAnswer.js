"use strict";

const getAnswer = (today, data) => {
  try {
    const { startDate, endDate } = data;
    const from = new Date(startDate);
    const to = new Date(endDate);
    return today > from && today < to ? "Yes" : "No";
  } catch (error) {
    console.log(error);
  }
};

module.exports = getAnswer;
