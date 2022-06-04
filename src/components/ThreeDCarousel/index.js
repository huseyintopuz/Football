import PropTypes from 'prop-types'
import { Carousel } from '3d-react-carousal';

import './threeDCarousel.css'

const ThreeDCarousel = ({ cards }) => {

  const slides = cards.cards.map((card) => (
    <img src={card.photoUrl} alt='card' key={card.photoUrl} />
  ))

  return (

    <div className='slide-show'>
          <Carousel
            slides={slides}
            interval={1500}
            autoplay={true}
            arrows={false}
          />
    </div>
  )
}

ThreeDCarousel.defaultProps = {
  cards: {}
}

ThreeDCarousel.propTypes = {
    cards: PropTypes.objectOf(PropTypes.any).isRequired
}


export default ThreeDCarousel