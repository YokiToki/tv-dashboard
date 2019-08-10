import {Button, TextField} from "@material-ui/core/index";
import React from "react";
import {withFocusable} from 'react-tv-navigation'


const FTextField = ({setFocus}) => {
  return (
    <TextField
      inputProps={{'contenteditable': true}}
      label="URL"
      style={{margin: 8}}
      placeholder="http://"
      helperText="Enter URL to load"
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}/>
  );
};

const FButton = ({setFocus}) => {
  return (
    <Button
      href="#"
      variant="contained"
      size="large"
      color="primary"
    >
      Open URL
    </Button>
  )
};

const FocusableTextField = withFocusable(FTextField);
const FocusableButton = withFocusable(FButton);

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: null,
    };
    this.handleChangeURL = this.handleChangeURL.bind(this);
  }

  handleChangeURL(e) {
    this.setState({'url': e.target.value})
  }

  render() {
    return (<form>
      <FocusableTextField
        focusPath='item-input'
        value={this.state.url}
        onChange={this.props.handleChangeURL}
      />
      <FocusableButton
        focusPath='button'
        onEnterPress={() => this.props.handleOpenURL(this.state.url)}/>
    </form>);
  }
}

export default Index;