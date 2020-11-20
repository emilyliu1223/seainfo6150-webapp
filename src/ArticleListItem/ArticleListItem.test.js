import React,{useState} from "react";
import ArticleListItem from "./ArticleListItem";
import { fireEvent } from "@testing-library/react";


  



describe("ArticleListItem tests", () => {
  it("renders correctly", () => {
    const { container } = render(<ArticleListItem article={{title:"hey",image:{_url:"aaa"}, shortText:"hello",
  timeStamp:"12/12/2019",displayDate:"05/03/2020"}} key={'1'}/>);
    expect(container).toMatchSnapshot();
  });
});

