import request from "supertest";
import app from "../app"; // Import your Express app instance

describe("Auth Controller", () => {
  it("should register a new user", async () => {
    const response = await request(app)
      .post("/api-v1/auth/register")
      .send({
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        password: "password123",
      })
      .expect(201);

    expect(response.body).toMatchSnapshot();
  });
});
