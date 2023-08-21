import React from "react";
import { render, screen } from "@testing-library/react";
import UserForm from "../components/UserForm"; // Import the component to be tested

describe("UserForm Component", () => {
  it("should render the form correctly", () => {
    render(<UserForm />);

    // Use screen queries to interact with the rendered component
    expect(screen.getByLabelText("First Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Last Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
  });
});
