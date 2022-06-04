import PropTypes from 'prop-types'
import CardFilter from '../CardFilter/index'
import MarketCard from '../MarketCard/index'
import './market.css'

const Market = ({ cards, balance, setBalance, setAllData, allData }) => {
  
  return (
    <div className='market-wrap'>
      <div className='market-div'>
        <div className='drop-down'>
          <h1 className='title'>MARKET</h1>
          <CardFilter cards={cards}/>
        </div>
      </div>
      <MarketCard 
      cards={cards}
      balance={balance}
      setBalance={setBalance}
      setAllData={setAllData}
      allData={allData}
      />
    </div>
  )
}

Market.defaultProps = {
  cards: {},
  allData: {},
  setAllData: {}
}

Market.propTypes = {
  cards: PropTypes.objectOf(PropTypes.any).isRequired,
  balance: PropTypes.number,
  setBalance: PropTypes.number,
  setAllData: PropTypes.objectOf(PropTypes.any).isRequired,
  allData: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default Market