import Mycards from '../Mycards/index';
import Market from '../MarketCard/index'
import CardFilter from '../CardFilter/index'
import './player.css'

const index = ({activeTab, cards, balance, setBalance, setAllData, allData}) => {
    
    return (
        <div className="player-options">
            <div>
                <div>
                    <h1 className="mycard-market">{activeTab === "tab1" ? 'MYCARDS' : 'MARKET'}</h1>
                    <CardFilter cards={cards} setAllData={setAllData} allData={allData} />
                </div>
            </div>
            {activeTab === "tab1" ?
                <Mycards
                    balance={balance}
                    setBalance={setBalance}
                    cards={allData?.allPlayers || []}
                    setAllData={setAllData}
                    allData={allData}
                />
                :
                <Market
                    balance={balance}
                    setBalance={setBalance}
                    cards={allData?.allPlayers || []}
                    setAllData={setAllData}
                    allData={allData}
                />}
        </div>
    )
}

export default index