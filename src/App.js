import React from 'react';
import Container from './components/Container';
import {withNavigation} from 'react-tv-navigation'

function App() {
  return (
    <Container/>
  );
}

const NavigableApp = withNavigation(App);

export default NavigableApp;
