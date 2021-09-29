import React from 'react'
import {Carousel} from "react-bootstrap"
import Basketball from '../assets/Basketball.png'
import Futbol from '../assets/Futbol.png'
import Weather from '../assets/Weather.png'
import test from '../assets/test.png'

function Carousels() {
    return (
        <div>
            <Carousel>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={test}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src="https://www.turizmgunlugu.com/wp-content/uploads/2021/08/malatya-Tohma-Kanyonu-696x418.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Weather}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>

    )
}

export default Carousels


