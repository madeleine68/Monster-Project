import { render, screen } from "@testing-library/react";
import App from "./App";
import { rest } from "msw";
import {setupServer} from "msw/node";

const studentResponse = rest.get("https://api.hatchways.io/assessment/students", (req,res,ctx) => {
    return res(
        ctx.json([
            {city: "arak",
            company: "ey",
            email: "test@imdb.com",
            firstName: "hi"}
        ])
    )
})
const handler = [studentResponse]
const server = new setupServer(...handler);

beforeAll(()=> server.listen());
afterEach(()=> server.resetHandlers());
afterAll(() => server.close());

it("it should have the correct student orton ", async() => {
    
    const { findByText } = render (<App />);
    expect( await findByText("test@imdb.com")).toBeVisible();

})
