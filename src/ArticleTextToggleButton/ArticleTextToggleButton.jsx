import React from 'react'
import styles from "./ArticleTextToggleButton.module.css"
const ArticleTextToggleButton = (props) => {
  return <input className={styles.btn} id={props.id} type="button"onClick={props.onClick} value={props.buttonText}></input>

};
  

export default ArticleTextToggleButton
