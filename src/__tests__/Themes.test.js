import React from "react";
import Themes from "../components/CodeFLow/sections/Themes";
import { render } from "@testing-library/react";
import "../__mocks__/intersectionObserverMock";

afterEach(() => {
	jest.useRealTimers();
});

test("Should render themes after time is 0", () => {
	jest.useFakeTimers().setSystemTime(new Date(2022, 2, 1));
	const { queryByTestId } = render(<Themes />);
	const string = "senior-themes";
	expect(queryByTestId(string)).toBeInTheDocument();
});

test("Should not render themes before time is 0", () => {
	const { queryByTestId } = render(<Themes />);
	const string = "senior-themes";
	expect(queryByTestId(string)).not.toBeInTheDocument();
});

test("Snapshot test", () => {
	const view = render(<Themes />);
	expect(view).toMatchSnapshot();
});
