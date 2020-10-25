
import React,{useState} from 'react'
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton"

const ArticleListItem=(props)=> {
    const [open,setOpen]=useState(false);
    const [bt,setBt]=useState("Show more");
    const [date,setDate]=useState('');
    const [text,setText]=useState('');
    const[id,setId]=useState('');
    const myList = props.article;
    function toggle(e){
        e.preventDefault();
           var btn=document.getElementById(e.target.id);
           
           if(btn.value=="Show more"){
               btn.value="Show less";
               setId(btn.id);
               console.log(document.getElementById("display"));
           }else if(btn.value="Show less"){
            btn.value="Show more";
            setId('');
           }
          
    }
    // }
    // const myList = props.article;
    const mappedList = myList.map((listItem) => (
        <li key={listItem.slug}>
            <h1>{listItem.title}</h1>
           
            <ArticleTextToggleButton id={listItem.slug} onClick={toggle}  buttonText="Show more"/>
            {listItem.slug==id && document.getElementById(listItem.slug).value=="Show less"?<div>
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
