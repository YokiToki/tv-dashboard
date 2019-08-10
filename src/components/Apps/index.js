import {Box, Button, Typography} from "@material-ui/core/index";
import React from "react";
import {withFocusable} from 'react-tv-navigation';
import ForkPlayerImg from "../../assets/forkplayer.svg";

const FButton = ({setFocus}) => {
  return (
    <Button
      href="#"
      variant="contained"
      size="large"
      color="primary"
    >
      <div>
        <img src={ForkPlayerImg} alt="ForkPlayer"/>
      </div>
      <div>ForkPlayer</div>
    </Button>
  )
};

const FocusableButton = withFocusable(FButton);

class Index extends React.Component {

  render() {
    return (<Box>
      <Typography variant="h5" component="h2">Applications</Typography>

      <FocusableButton
        focusPath='button-forkPlayer'
        onEnterPress={() => this.props.handleOpenURL('http://operatv.obovse.ru/2.5/')}
      />
    </Box>);
  }
}

export default Index;