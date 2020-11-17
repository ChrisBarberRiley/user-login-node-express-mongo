const request = require("supertest");
const app = require("../src/server");
describe("Get Endpoints", () => {
    it("should create a get hello wold", async () => {
        const res = await request(app).get("/");
        expect(res.statusCode).toEqual(200);
    });
});
