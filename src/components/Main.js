import { React, Component } from 'react';
import CarouselHeader from './CarouselHeader';

class Main extends Component {
  render() {
    return (
      <CarouselHeader carouselCount={3} itemCount={3} imgs={["1", "2", "3", "4", "5", "6", "7"]}/>
    );
  }
}

export default Main;