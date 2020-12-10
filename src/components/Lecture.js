import { React, Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LectureCard from './LectureCard'


class Lecture extends Component {
  static defaultProps = {
    cardData: ["1", "2", "3", "4"],
  }

  render() {
    return (
      <Container>
        <Row>
          {
            this.props.cardData.map((element, index) => {
              return(
                <Col xs="12" md="6" xl="4">
                  <LectureCard title={element}/>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    );
  }
}

export default Lecture;