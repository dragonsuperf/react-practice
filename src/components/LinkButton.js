import { React, Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const ButtonWithProps = styled(Button)`
  background-color: ${(props) => props.backgroundColor} !important;
  color: ${(props) => props.color};
  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor} !important;
    color: ${(props) => props.hoverColor} !important;
  }
`

class LinkButton extends Component {
  static defaultProps = {
    backgroundColor: "black",
    color: "white",
    hoverBackgroundColor: "white",
    hoverColor: "black",
    linkTo: "/",
    name: "Button"
  }

  render() {
    return (
      <Router>
        <ButtonWithProps color={this.props.color} hoverColor={this.props.hoverColor}
        backgroundColor={this.props.backgroundColor} hoverBackgroundColor={this.props.hoverBackgroundColor}>
          <Link to={this.props.linkTo}/>
          {this.props.name}
        </ButtonWithProps>
      </Router>
    );
  }
}


export default LinkButton;