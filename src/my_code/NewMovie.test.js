import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import NewMovie from "./NewMovie";

// snapshot testing takes the result of your code and tests to see if it
// is equivilent to a 'snapshot' of sorts.

afterEach(cleanup);

test("<NewMovie/> 1", () => {
  const { debug, getByTestId, queryByTestId, container, getByText } = render(
    <NewMovie />
  );

  const pageTitle = getByTestId("page-title");

  expect(pageTitle.textContent).toBe("New Movie");
  expect(queryByTestId("movie-form")).toBeTruthy();
  expect(container.firstChild).toMatchSnapshot();

  const submitBtn = getByText("Submit");

  expect(submitBtn).toBeTruthy();
  fireEvent.click(submitBtn);
});
