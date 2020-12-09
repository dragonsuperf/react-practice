import { React, Component } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import './CarouselHeader.css'

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
        <Container fluid className="carousel-background">
          <h3 className="carousel-header-text">Hot Class</h3>
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
                              <Col xs lg="3">
                                <img className="img-box" src="/statics/thumbnail/003/200x200.crop.jpg" alt={index} />
                                <p className="img-caption">{imgList[colIndex + index * this.props.itemCount]}</p>
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
        </Container>
    );
  }
}

export default CarouselHeader;