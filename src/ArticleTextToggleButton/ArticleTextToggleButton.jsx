import React from 'react'

const ArticleTextToggleButton = (props) => {
   
  return <input id={props.id} type="button"onClick={props.onClick} value={props.buttonText}></input>;
  };
  

export default ArticleTextToggleButton
