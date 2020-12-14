import { React, Component } from 'react';
import CarouselHeader from './CarouselHeader';

class Main extends Component {
  render() {
    return (
      <CarouselHeader carouselCount={3} itemCount={3}/>
    );
  }
}

export default Main;