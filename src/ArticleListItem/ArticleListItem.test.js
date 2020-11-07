import React from "react";
import ArticleListItem from "./ArticleListItem";
import { fireEvent } from "@testing-library/react";

describe("ArticleListItem tests", () => {
  it("renders correctly", () => {
    const { container } = render(<ArticleListItem article={"article"} key={'1'}/>);
    expect(container).toMatchSnapshot();
  });


});
