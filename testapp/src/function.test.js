import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { CheckBox } from "./function";

test("Selecting checkbox", () => {
    const {getByLabelText} = render(<CheckBox />);
    const checkbox = getByLabelText(/not checked/);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
});