
import ArticleList from "./ArticleList";

import React, {useEffect, useState} from "react";

import { isEmpty } from "lodash";


    
  
    
    
      const fetchData = async () => {
          
        // performs a GET request
        const response = await fetch(
          "http://demo1390455.mockable.io/articles"
        );
        const responseJson = await response.json();
        
      };
      console.log(fetchData);
     
      
   
  





describe("ArticleList tests", () => {
  it("renders correctly", () => {
    const { container } = render(<ArticleList articles={Object.values(fetchData)} />);
    expect(container).toMatchSnapshot();
  });
});