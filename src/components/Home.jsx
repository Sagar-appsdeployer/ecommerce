import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
  <>
  <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/studio-shot-pretty-black-woman-with-white-shopping-bag-standing-yellow-background-trendy-spring-fashionable-look_273443-10.jpg?size=626&ext=jpg&ga=GA1.2.1616608502.1673808878&semt=sph"
          alt="First slide"
          style={{height:"635px"}}
        />
        <Carousel.Caption>
        <h1>Primeshop</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/super-excited-woman-holding-up-smartphone-shopping-bags_23-2148684511.jpg?size=626&ext=jpg&ga=GA1.2.1616608502.1673808878&semt=sph"
          alt="Second slide"
          style={{height:"635px"}}

        />

        <Carousel.Caption>
            <h1>Primeshop</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/merry-satisfied-man-points-upper-right-corner-stands-half-turned-shows-great-shopping-offer-poses-ripped-hole_273609-38454.jpg?w=996&t=st=1674906579~exp=1674907179~hmac=13d122d7510647a71f9e7bb871e9a4dfb1f418af03b11012792f87f01d839679"
          alt="Third slide"
          style={{height:"635px"}}

        />

        <Carousel.Caption>
        <h1>Primeshop</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </>
  )
}

export default Home