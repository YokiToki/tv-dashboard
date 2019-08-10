import React from "react";
import Form from "../Form";
import Apps from "../Apps";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenURL = this.handleOpenURL.bind(this);
  }

  handleOpenURL(url) {
    try {
      document.location.href = url;
    } catch (e) {
      console.log(e.message);
    }
  }

  render() {
    return (<main>
      <div className="container">
        <Form handleOpenURL={this.handleOpenURL}/>
        <hr/>
        <Apps handleOpenURL={this.handleOpenURL}/>
      </div>
    </main>);
  }
}

export default Container;