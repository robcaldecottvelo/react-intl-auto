import React from "react";
import { IntlProvider } from "react-intl";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(
    <IntlProvider locale="en">
      <App />
    </IntlProvider>
  );
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
