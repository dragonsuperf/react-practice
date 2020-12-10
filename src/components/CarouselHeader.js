import { React, Component } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const ContainerWithBackground = styled(Container)`
  background:linear-gradient(to bottom,rgba(0,0,0,.4),rgba(0,0,0,.4)),url('https://1cup.kr/imgs/bgs.jpg');
  width: 100%;
`

const CarouselHeaderText = styled.h3`
  text-align: center;
  color: white;
  font-size: 35px;
  padding-top: 20px;
  padding-bottom: 20px;
`

const ImgCaption = styled.p`
  margin-top:10px;
  font-size:14px;
  color:white;
`

const ImgBox = styled.img`
  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, .8);
  vertical-align: middle;

  margin-top: 15px;
  width: 95%;
  border-radius: 30px;
`

class CarouselHeader extends Component {
  static defaultProps = {
    carouselCount: 3,
    itemCount: 3,
    imgs: ['oneoneoneone','twotwotwotwo','threethreethree','fourfourfour','fivefivefive','sixsixsix','sevensevenseven','eighteighteight','nineninenine','tententen'],
  }

  render() {
    const imgList = [];

    this.props.imgs.map( img => imgList.push(img) );

    let carouselCount = this.props.carouselCount;

    if(this.props.carouselCount > imgList.length / this.props.itemCount) {
      carouselCount = parseInt(Math.ceil(imgList.length / this.props.itemCount));
    }

    return (
        <ContainerWithBackground fluid>
          <CarouselHeaderText>Hot Class</CarouselHeaderText>
          <Carousel controls={false} indicators={false}>
            {
              [...Array(carouselCount)].map((element, index) => {
                return (
                  <Carousel.Item interval={2000}>
                    <Container className="carousel-header">
                      <Row className="justify-content-md-center">  
                        {
                          imgList.slice(index * this.props.itemCount, index * this.props.itemCount + this.props.itemCount).map((element, colIndex) => {
                            return (
                              <Col xs lg="3" className="text-center">
                                <ImgBox src="/statics/thumbnail/003/200x200.crop.jpg" alt={index} />
                                <ImgCaption>{imgList[colIndex + index * this.props.itemCount]}</ImgCaption>
                              </Col>
                            )
                          })
                        }
                      </Row>
                    </Container>
                  </Carousel.Item>
                )
              })
            }
          </Carousel>
        </ContainerWithBackground>
    );
  }
}

export default CarouselHeader;