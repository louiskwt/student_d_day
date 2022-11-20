const getAnswer = require("../utils/getAnswer");

describe("Test Answer Controller", () => {
  it("responds with an answer (either true / false)", () => {
    expect(
      getAnswer(new Date(), {
        startDate: "21 April 2023",
        endDate: "16 May 2023",
      })
    ).toBe("No");
  });
});
