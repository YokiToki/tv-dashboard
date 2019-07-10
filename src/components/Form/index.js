import {Button, TextField} from "@material-ui/core/index";
import React from "react";

const style = {
  height: '50vh',
};

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
    };
    this.handleChangeURL = this.handleChangeURL.bind(this);
  }

  handleChangeURL(e) {
    this.setState({'url': e.target.value})
  }

  render() {
    return (<form style={style}>
      <TextField
        label="URL"
        style={{margin: 8}}
        placeholder="http://"
        helperText="Enter URL to load"
        fullWidth
        margin="normal"
        value={this.state.url}
        onChange={this.handleChangeURL}
        InputLabelProps={{
          shrink: true,
        }}/>
      <Button onClick={() => this.props.handleOpenURL(this.state.url)} variant="contained" size="large" color="primary">
        Open URL
      </Button>
    </form>);
  }
}

export default Index;