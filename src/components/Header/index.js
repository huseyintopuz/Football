import PropTypes from 'prop-types'
import whiteIcon from '../../icons/whiteIcon.png'
import feFcIcon from '../../icons/feFc.png'
import budgetIcon from '../../icons/budget.svg'
import numeral from 'numeral'
import { Row, Col } from 'antd';
import './header.css'

const Header = ({ activeTab, setActiveTab, balance }) => {

  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1")
  }

  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2")
  }

  return (

    <div className='header'>
      <Row className='full' align='middle' justify='space-between'>

        <div className='left-side'>
          <Col className='logo' xs={3} sm={4} xl={7}>
            <div className='icons'>
              <img className='white-ball' src={whiteIcon} alt='whiteBall' />
              <img className='feFcIcon' src={feFcIcon} alt='feFc' />
            </div>
          </Col>
          <Col xs={20} sm={14} xl={12}>
            <ul className='options'>
              <li onClick={handleTab1} >
                <a href='#' className='mycards'>MY CARDS</a>
                <div className={activeTab === 'tab1' ? 'active-tab' : ''} />
              </li>
              <li onClick={handleTab2} >
                <a href='#' className='market'>MARKET</a>
                <div className={activeTab === 'tab2' ? 'active-tab' : ''} />
              </li>
            </ul>
          </Col>
        </div>

        <Col xs={6} sm={6} xl={4}>
          <div className='right-side'>
            <div className='red-background'>
              <img className='budget-icon' src={budgetIcon} alt='budget' />
            </div>
            <div className='budget'>€ {numeral(balance).format('0,0.00')}</div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

Header.propTypes = {
  balance: PropTypes.number,
  setBalance: PropTypes.number,
  activeTab: PropTypes.string,
  setActiveTab: PropTypes.func.isRequired, 
}

export default Header