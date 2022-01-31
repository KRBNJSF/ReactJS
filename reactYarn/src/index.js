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
