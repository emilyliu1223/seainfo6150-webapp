import React from 'react'
import PropTypes from "prop-types";

const ArticleListItem=(props)=> {
    const myList = props.article;
    const mappedList = myList.map((listItem) => (
        <li key={listItem.slug}>
            <h1>{listItem.title}</h1>
            <time dateTime={listItem.timeStamp}>{listItem.displayDate}</time>
            <p>{listItem.shortText}</p>
            </li>
      ));
    return (
        <article>
      <ul style={{margin:"40px 300px",width:"600px"}}>
         {mappedList}
        </ul>
    </article>
         
    )
}


export default ArticleListItem
