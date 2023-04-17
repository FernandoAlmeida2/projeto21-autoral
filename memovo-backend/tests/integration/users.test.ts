import httpStatus from "http-status";
import supertest from "supertest";
import app, { init } from "../../src/app";
import { cleanDb } from "../helpers";

const server = supertest(app);

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await cleanDb();
});

describe("POST /users", () => {
    it("should respond with status 400 when body is not given", async () => {
        const response = await server.post("/users");
    
        expect(response.status).toBe(httpStatus.BAD_REQUEST);
     });
})