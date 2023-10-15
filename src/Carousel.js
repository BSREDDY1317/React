import React from 'react'
import one from './imgs/New arrivels.jpg'
import two from './imgs/offer.png'
import three from './imgs/pic3.jpg'
import videoSource from './imgs/add.mp4';


const Carousel = () => {
  return (
    <>
        <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner" >
    <div className="carousel-item active">
      <img src={one}className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={two} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
    <video  controls={false} autoPlay muted>
  <source src={videoSource} type="video/mp4" />
</video>
    </div>
  </div>

  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </>
  )
}

export default Carousel
