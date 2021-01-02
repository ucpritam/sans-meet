import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'

const Tutorials = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://lh3.googleusercontent.com/proxy/v7JSNIadt6DegU0niVzTK8iby10Ex00aCWK8PcdivjkZ8baH25a6yvncmcPzGYFQq3pf7hroYw-FHBAJiTZzvfJ6e2NjrNGstFe7cA_yk_SsJvYFIAOk_LWxOD3ye_t-oYwYpw"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://lh3.googleusercontent.com/proxy/v7JSNIadt6DegU0niVzTK8iby10Ex00aCWK8PcdivjkZ8baH25a6yvncmcPzGYFQq3pf7hroYw-FHBAJiTZzvfJ6e2NjrNGstFe7cA_yk_SsJvYFIAOk_LWxOD3ye_t-oYwYpw"
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
        src="https://lh3.googleusercontent.com/proxy/v7JSNIadt6DegU0niVzTK8iby10Ex00aCWK8PcdivjkZ8baH25a6yvncmcPzGYFQq3pf7hroYw-FHBAJiTZzvfJ6e2NjrNGstFe7cA_yk_SsJvYFIAOk_LWxOD3ye_t-oYwYpw"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
};

export default Tutorials;
