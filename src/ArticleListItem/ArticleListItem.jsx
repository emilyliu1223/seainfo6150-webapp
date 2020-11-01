
import React,{useState} from 'react'
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton"
import styles from"./ArticleListItem.module.css"
const ArticleListItem=(props)=> {
    
  
    const [isTextShowing, setIsTextShowing] = useState(false);
  
    function onClick() {
      setIsTextShowing(!isTextShowing);
    }
  
    return (
      <div className={styles.container}>
      <article className={styles.article}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>{props.article.title}</h2>
          {isTextShowing && (
            <div className={styles.text}>
              <p>{props.article.shortText}</p>
              <time className={styles.time} dateTime={props.article.timeStamp}>
                {props.article.displayDate}
              </time>
            </div>
          )}
        </div>
        <div className={styles.button}> 
        <ArticleTextToggleButton
          buttonText={isTextShowing ? "Show less" : "Show more"}
          onClick={onClick}
        />
        </div>
      </article>
    </div>

    )
}


export default ArticleListItem
