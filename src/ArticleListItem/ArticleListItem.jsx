
import React,{useState} from 'react'
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton"
import styles from"./ArticleListItem.module.css"
const ArticleListItem=(props)=> {
    const [open,setOpen]=useState(false);
    const [bt,setBt]=useState("Show more");
    const [date,setDate]=useState('');
    const [text,setText]=useState('');
    const[id,setId]=useState('');
    const myList = props.article;
    // function toggle(e){
    //     e.preventDefault();
    //        var btn=document.getElementById(e.target.id);
    //        if(btn.value=="Show more"){
    //            btn.value="Show less";
    //            setId(btn.id);
            
    //        }else if(btn.value="Show less"){
    //         btn.value="Show more";
    //         setId("");
    //        }
    //        }
          
    
    // }
    // const myList = props.article;
    const mappedList = myList.map((listItem) => (
        <div className={styles.section} key={listItem.slug}>
            <h1>{listItem.title}</h1>
           
            <ArticleTextToggleButton id={listItem.slug} buttonText="Show more"onClick={(e)=>{
                 var btn=document.getElementById(e.target.id);
                 if(btn.value=="Show more"){
                    btn.value="Show less";
                    setId(btn.id);
                }
                else if(btn.value="Show less"){
                    btn.value="Show more";
                    setId("");
                   }
                
                
            }}  />
            {id==listItem.slug&& document.getElementById(listItem.slug).value=="Show less"?<div className={styles.display}>
             <time dateTime={listItem.timeStamp}>{listItem.displayDate}</time> 
            <p>{listItem.shortText}</p> 
             </div>:<div></div>
           }
            </div>
      ));
    return (
        <article>
      <div>
         {mappedList}
        </div>
    </article>
         
    )
}


export default ArticleListItem
