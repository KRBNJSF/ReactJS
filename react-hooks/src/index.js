import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => {
  const [cookies, updateCookies] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${cookies} times`;
  })

  return (
    <div className = "container">
      <img id="cookie" src="/cookie.png" alt="cookie.png" onClick={() => updateCookies(cookies + 1)}/>
      <p id="info">Cookies: {cookies}</p>
      </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));