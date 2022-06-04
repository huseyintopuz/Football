import PropTypes from 'prop-types'
import Card from '../Card/index'
import './mycards.css'

const Mycards = ({ cards, balance, setBalance, setAllData, allData }) => {

  const handleAdd = (id) => {

    if (allData?.allPlayers?.length) {
      let updatedAllPlayers = structuredClone(allData.allPlayers);
      updatedAllPlayers.map(player => {
        let updatedPlayer = player;
        if (player.isBought && player.id === id) updatedPlayer.isBought = false
        return updatedPlayer;
      })

      setAllData({
        ...allData,
        allPlayers: updatedAllPlayers,
      })

    }
  }

  return (
    <div className='myCardsCom'>
      <ul className='myCardList'>
        {
          cards?.filter(card => card?.isBought  && !card?.isHidden).map((mycard) => {
            return (
              <li key={mycard.id}>
                <Card
                  photoUrl={mycard.photoUrl}
                  price={mycard.price}
                  isBought={mycard.isBought}
                  handleAdd={handleAdd}
                  id={mycard.id}
                  balance={balance}
                  setBalance={setBalance}
                  setAllData={setAllData}
                  allData={allData}
                />
              </li>
            )
          })
        }
      </ul>

    </div>
  )
}
Mycards.defaultProps = {
  cards: {},
  allData: {},
  setAllData: {}
}

Mycards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.any).isRequired,
  balance: PropTypes.number.isRequired,
  setBalance: PropTypes.func.isRequired,
  setAllData: PropTypes.func.isRequired,
  allData: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default Mycards