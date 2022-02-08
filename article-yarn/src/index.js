import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Article from "./Article";
import "./index.css";

const App = () => {
  const [articles, setArticles] = useState([
    { title: "Zikmund je poeta!", body: "Byl pozdni vecer...", author: "Petr", id: 0 },
    { title: "ANOANO", body: "nene", author: "Jan", id: 1 },
    { title: "jojo", body: "procproc", author: "Josef", id: 2 },
  ]);

  const handleDelete = (id) => {
    const newArticles = articles.filter(article => article.id !== id);
    setArticles(newArticles);
  }

  return (
    <div className="container">
      <Article articles={articles} handleDelete={handleDelete} />
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById("root"));