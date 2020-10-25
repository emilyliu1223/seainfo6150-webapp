import React from 'react'
import ArticleListItem from "../ArticleListItem/ArticleListItem"
import { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import { Switch, Route } from "react-router-dom";
function ArticleList() {
 const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch(
        "http://demo1390455.mockable.io/articles"
      );
      const responseJson = await response.json();
      setFetchedData(responseJson);
      
    };
    if(isEmpty(fetchedData)){
        fetchData();
      }
  }, [fetchedData]);
  

  return isEmpty(fetchedData) ? null : (
    <div className="App">
       
      <Switch>
        <Route>
          <ArticleListItem article={Object.values(fetchedData)} />
          {/*  */}
        </Route>
      </Switch>
    </div>
  );
}

export default ArticleList
