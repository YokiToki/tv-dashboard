import {Box, Button, Typography} from "@material-ui/core/index";
import React from "react";
import {withFocusable} from 'react-tv-navigation';
import forkPlayerImg from "../../assets/forkplayer.svg";
import xSmartImg from "../../assets/xsmart.svg";

const FButton = ({setFocus, color, text, img}) => {
  return (
    <Button
      href="#"
      variant="contained"
      size="large"
      color={color}
      style={{marginRight: '20px', width: '200px'}}
    >
      <div>
        <img src={img} alt={text} height="60"/>
      </div>
      <div>{text}</div>
    </Button>
  )
};

const FocusableButton = withFocusable(FButton);

class Index extends React.Component {

  render() {
    return (<Box>
      <Typography variant="h5" component="h2">Applications</Typography>

      <FocusableButton
        focusPath="button-forkPlayer"
        color="primary"
        text="ForkPlayer"
        img={forkPlayerImg}
        onEnterPress={() => this.props.handleOpenURL('http://operatv.obovse.ru/2.5/')}
      />

      <FocusableButton
        focusPath="button-xSmart"
        color="primary"
        text="XSMART"
        img={xSmartImg}
        onEnterPress={() => this.props.handleOpenURL('http://app.xsmart.tv/')}
      />
    </Box>);
  }
}

export default Index;
