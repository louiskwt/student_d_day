const request = require("supertest");

describe("GET /", () => {
  it("responds with correct status", (done) => {
    request("http://localhost:3000").get("/").expect(200, done);
  });
});
