import {Box, Button, Typography} from "@material-ui/core/index";
import React from "react";

const style = {
  height: '50vh',
};

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<React.Fragment>
      <Typography variant="h5" component="h2">Applications</Typography>
      <Box style={style}>
        <Button onClick={() => this.props.handleOpenURL('http://operatv.obovse.ru/2.5/')} variant="contained" size="large" color="primary">
          Forkplayer
        </Button>
      </Box>
    </React.Fragment>);
  }
}

export default Index;