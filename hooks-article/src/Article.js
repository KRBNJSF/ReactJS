import React from "react";

const Article = (props) => {
    const articles = props.articles.map((article, index) =>{
        return(
            <div key ={index}>
                <h1>{article.title}</h1>
                <p>{article.body}</p>
                <p>{article.author}</p>
                <button>Delete article with id {article.id}</button>
            </div>
        )
    });
    return <div className="article-wrapper">{articles}</div>
}

export default Article;