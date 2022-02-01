# ReactJS

<a href="https://reactjs.org/docs/getting-started.html">ReactJS</a>

Práce v node.js
---
npm i -g yarn<br>

<a href="https://create-react-app.dev/docs/getting-started/">Yarn</a>

Vytvořím složku a otevřu ji v node.js

Vložím do node.js ->
```
yarn create react-app my-app
```
Výsledek:<br>
![image](https://user-images.githubusercontent.com/90755554/151770217-ea08a299-d8fe-4c83-9f01-57aac8b00d91.png)

cd my-app<br>
yarn -start<br>

Spustí se: <br>

![image](https://user-images.githubusercontent.com/90755554/151770864-e45bd9e0-1f5d-424a-955a-f59cff4f0f49.png)

Práce ve VSC
---
Otevřu složku ve VSC<br>
![image](https://user-images.githubusercontent.com/90755554/151771242-05affea3-25d4-4e22-b262-bd812716ef84.png)

![image](https://user-images.githubusercontent.com/90755554/151772681-9ce31d01-b1c8-44c0-bfa3-450077a273ff.png)

Important imports - React
```
import React from "react";
import ReactDom from "react-dom";
import "./index.css";
```
Cookie clicker via ReactJS
---

```
import React from "react";
import ReactDom from "react-dom";
import "./index.css";

class App extends React.Component {

  state = {
    cookies: 0
  }

  updateCookies = () => {
    let { cookies } = this.state;

    this.setState({
      cookies: ++cookies
    });
  }

  render() {
    let { cookies } = this.state;

    return (
      <div className = "container">
      <img id="cookie" src="/cookie.png" alt="cookie.png" onClick={this.updateCookies}/>
      <p id="info">Cookies: {cookies}</p>
      </div>
    )
  }

}

ReactDom.render(<App />, document.getElementById("root"));

```
public -> uživatel<br>
src -> naše pracovní soubory

ReactJS - Hooks
---

<a href="https://medium.com/@ralph1786/intro-to-react-component-lifecycle-ac52bf6340c">React lifecycle</a>


<a href="https://reactjs.org/docs/hooks-intro.html">React hooks</a>

<b>Cookie clicker via hooks</b>

Nodejs ->

mkdir [name]<br>
cd name<br>
yarn create react-app my-app<br>
cd my-app<br>
yarn start<br>

IDE -> 

![image](https://user-images.githubusercontent.com/90755554/151941615-d31b296a-f096-495b-a940-59e834a9b70b.png)<br>

Základ:
```
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => {
  
}

ReactDOM.render(<App />, document.getElementById("root"));
```

```
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
```
