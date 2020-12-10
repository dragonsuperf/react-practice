import { React, Component } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const CardContainer = styled(Card)`
  text-align: center;
  margin-bottom: 15px;
`

const CardImg = styled(Card.Img)`
  width:300px;
  height:160px;
  margin:auto;
  margin-top:10px;
  border-radius:10px;
`

const ProfileImg = styled(Card.Img)`
  margin:auto;
  width:62px;
  height:62px;
  border-radius:40px;
  margin-top:-30px;
  border: solid white 5px; 
`

const ScollBox = styled(Card.Text)`
  overflow: scroll;
  height: 100px;
  padding: 5px 10px;
  background-color: #f8f8f8;
`

const DetailTitle = styled(Card.Title)`
  font-size:1rem;
  color:#2b95ff;
`

class LectureCard extends Component {
  static defaultProps = {
    title: "Card",
    img:"/statics/thumbnail/003/",
    details: `
    Some quick example text to build on the card title and make up the bulk of the card's content
    Some quick example text to build on the card title and make up the bulk of the card's content
    Some quick example text to build on the card title and make up the bulk of the card's content
    `,
  }

  render() {
    return (
      <CardContainer>
        <CardImg variant="top" src={`${this.props.img}300x160.crop.jpg`}/>
        <ProfileImg variant="top" src={`${this.props.img}200x200.crop.jpg`}/>
        <Card.Title>{this.props.title}</Card.Title>
        <ScollBox>
          <Card.Text>
            <DetailTitle>📖교육과정</DetailTitle>
            {this.props.details}
          </Card.Text>
        </ScollBox>
      </CardContainer>
    );
  }
}

export default LectureCard;