
import Carousel from 'react-bootstrap/Carousel'

export default function Slider() {
  return (
    <div expand="lg">
      <Carousel
        data-bs-theme="dark"
        class="bg-dark"
      >
        <Carousel.Item>
          <img
            alt="Hero1"
            className="d-block w-100"
            // src="/images/Hero/Hero1.jpg"
            // src={`url("images/Hero/Hero1.jpg")`}
            src={`./images/Hero/Hero3.jpg`}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="Hero2"
            className="d-block w-100"
            src="/images/Hero/Hero2.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="Hero3"
            className="d-block w-100"
            // src="/images/Hero/Hero3.jpg"

            src={`./images/Hero/Hero3.jpg`}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="Hero4"
            className="d-block w-100"
            // src="/images/Hero/Hero4.jpg"
            // src={`url("images/Hero/Hero4.jpg")`}
            src={`./images/Hero/Hero4.jpg`}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
