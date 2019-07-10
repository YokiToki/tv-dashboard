import {Container as UIContainer} from '@material-ui/core';
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
    return (<UIContainer maxWidth="lg">
      <Form handleOpenURL={this.handleOpenURL}/>
      <Apps handleOpenURL={this.handleOpenURL}/>
    </UIContainer>);
  }
}

export default Container;