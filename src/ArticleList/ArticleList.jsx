import React from 'react'
import ArticleListItem from "../ArticleListItem/ArticleListItem"
import styles from "./ArticleList.module.css";

const ArticleList = (props) => {
  let displayContent;
  console.log(props.articles)
  if (props.articles) {
    displayContent = (
      <div className={styles.container}>
        
        {props.articles.map((article) => (
          <ArticleListItem article={article} key={article.slug} />
        ))}
      </div>
      
    );
  } else {
    displayContent = <div>Try again</div>;
  }

  return (
    <div>
      {displayContent}
    </div>
  );
};


export default ArticleList
