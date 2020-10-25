import React from 'react'

const ArticleTextToggleButton = (props) => {
   
  return <button id={props.slug} onClick={props.onClick} value={props.value}>{props.buttonText}</button>;
  };
  

export default ArticleTextToggleButton
