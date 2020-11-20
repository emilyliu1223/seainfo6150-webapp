import React from 'react'
import "./ArticleImage.css"
function ArticleImage(props) {
    return (
        <div className="image_container">
            <img className="image"src={props.url} alt={props.title}/>
        </div>
    )
}

export default ArticleImage
