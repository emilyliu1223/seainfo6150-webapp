import { set } from 'lodash';
import React,{useState} from 'react'
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton"

const ArticleListItem=(props)=> {
    const [open,setOpen]=useState(false);
    const [bt,setBt]=useState("Show more");
    const [date,setDate]=useState('');
    const [text,setText]=useState('');
    const[id,setId]=useState('');
    const myList = props.article;
    const toggle=(e)=>{
            setId(e.target.value);
            if(bt=="Show more"){
                setBt("Show less");
            }else{
                setBt("Show more");
            }
    }
    // }
    // const myList = props.article;
    const mappedList = myList.map((listItem) => (
        <li key={listItem.slug}>
            <h1>{listItem.title}</h1>
            <ArticleTextToggleButton onClick={toggle} buttonText={bt} value={listItem.slug}/>
            {listItem.slug==id&&bt=="Show less"? <div>
            <time dateTime={listItem.timeStamp}>{listItem.displayDate}</time> 
            <p>{listItem.shortText}</p>
            </div>
     :<div></div>  
}
           
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
