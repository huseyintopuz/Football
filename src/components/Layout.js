import { useState, useEffect } from 'react'
import { getPlayers, getMycards, getBudget } from '../api';
import Header from './Header/index'
import SliderBlack from './SliderBlack'
import PlayerOptions from './PlayerOptions/index'
import './layout.css'

const Layout = () => {
  const [balance, setBalance] = useState(0);
  const [activeTab, setActiveTab] = useState("tab1");
  const [allData, setAllData] = useState({});

  const getData = async () => {
    const allPlayers = await getPlayers();
    const myCards = await getMycards();
    const budget = await getBudget();

    if (budget?.budget) {
      setBalance(budget.budget);
    } else {
      setBalance(0);
    }
    const updatedMycards = myCards.map(mycard => ({ ...mycard, isBought: true, isHidden: false }));
    const updatedAllPlayers = allPlayers.map(singlePlayer => ({ ...singlePlayer, isBought: false, isHidden: false }));


    setAllData({
      allPlayers: [
        ...updatedMycards,
        ...updatedAllPlayers
      ],
      budget,
    })
  }
  useEffect(() => {
    getData();
  }, []);
  
  return (
    <div className='layout'>
      <Header balance={balance} setActiveTab={setActiveTab} activeTab={activeTab} allData={allData} setAllData={setAllData}/>
      <SliderBlack cards={allData?.allPlayers || []} />
      <PlayerOptions
        activeTab={activeTab}
        balance={balance}
        setBalance={setBalance}
        cards={allData?.allPlayers || []}
        setAllData={setAllData}
        allData={allData}
      />
    </div>

  )
}

export default Layout