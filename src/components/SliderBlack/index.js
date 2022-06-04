import ThreeDCarousel from '../ThreeDCarousel/index'
import leftarrow from '../../icons/leftarrow.svg'
import pagecontrol from '../../icons/pagecontrol.svg'
import pagecontrolsecond from '../../icons/pagecontrolsecond.svg'
import rightarrow from '../../icons/rightarrow.svg'
import { Row, Col } from 'antd';
import './sliderBlack.css'

const SliderBlack = (cards) => {

  return (

    <div className='slider-black'>
      <Row className='full' align='middle' justify='center'>
        <Col xs={8} sm={8} md={8}>
          <div className='left-side-new'>
            <div>
              <h1 className='new'>NEW</h1>
              <h2 className='bronze'>BRONZE CARDS</h2>
            </div>
            <div className='pagination-slide'>
              <img className='left-arrow' src={leftarrow} alt='left arrow' />
              <img className='page-control' src={pagecontrol} alt='page control' />
              <img className='page-control' src={pagecontrolsecond} alt='page control' />
              <img className='page-control2' src={pagecontrol} alt='page control' />
              <img className='right-arrow' src={rightarrow} alt='right arrow' />
            </div>
          </div>
        </Col>
        <Col xs={6} sm={6} md={6}>
          <div>
            <ThreeDCarousel cards={cards} />
          </div>
        </Col>
      </Row>
    </div>

  )
}

export default SliderBlack