import { React, Component } from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import { Button } from 'react-bootstrap'

class LinkButton extends Component {
  static defaultProps = {
    color: "white",
    hoverColor: "light-grey",
    linkTo: "/"
  }

  render() {
    return (
      <Router>
        <Button>
          <Link to={this.props.linkTo}/>
        </Button>
      </Router>
    );
  }
}

export default LinkButton;