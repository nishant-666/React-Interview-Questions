import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("Check the initial value of count", () => {
  const { getByTestId } = render(<Counter initialValue={0} />);
  let counter = getByTestId("count").textContent;

  expect(Number(counter)).toEqual(0);
});

test("Check the Increment Button", () => {
  const { getByTestId, getByRole } = render(<Counter initialValue={0} />);
  let counter = getByTestId("count").textContent;
  expect(Number(counter)).toEqual(0); //0

  let incrementBtn = getByRole("button", { name: "Increment Count" });

  fireEvent.click(incrementBtn);
  let counterInc = getByTestId("count").textContent;
  expect(Number(counterInc)).toEqual(1); //1
});
