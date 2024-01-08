import React from "react";
import { render, fireEvent, queryByLabelText } from "@testing-library/react";
import { getByStyle } from "@testing-library/user-event";

import BoxList from "./BoxList";

it("renders without crashing", function () {
  render(<BoxList />);
});

it("maches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add a new box", function () {
  const { queryByText, getByLabelText, getByText, getByStyle } = render(
    <BoxList />
  );
  const inputLabel = queryByText("Background Color");
  expect(inputLabel).toBeInTheDocument();

  const input = getByLabelText("Background Color");
  const btn = queryByText("Add Box!");
  expect(getByStyle(document.body, { backgroundColor: "peach" })).toBeNull();

  fireEvent.change(input, { target: { value: "peach" } });
  fireEvent.click(btn);

  const newBox = getByStyle(document.body, { backgroundColor: "peach" });
  expect(newBox).toBeInTheDocument();
});
