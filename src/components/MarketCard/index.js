import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Card from '../Card/index'
import './marketCard.css'


const MarketCard = ({ cards, balance, setBalance, setAllData, allData }) => {
    
    const [activePage, setActivePage] = useState(0);
    const [updatedCards, setUpdatedCards] = useState([]);
    const [slicedCards, setSlicedCards] = useState([]);

    useEffect(() => {
        const changedCards = cards?.filter(card => !card?.isBought && !card?.isHidden)?.length > 0 ?
            cards?.filter(card => !card?.isBought && !card?.isHidden) : [];

        setUpdatedCards(changedCards);
        if (changedCards.length > 0) setSlicedCards(changedCards.slice(0, 10));
        setActivePage(0);
    }, [cards]);

    const handlePageChange = (page) => {
        setActivePage(page)
        setSlicedCards(updatedCards.slice(10 * (page), 10 * (page) + 10))
        console.log('handle', page, updatedCards.slice(10 * (page), 10 * (page) + 10))
    }

    const handleLeftArrow = () => {
        // update the state to previous page
        if (activePage > 0 && activePage <= 4) {
            handlePageChange(activePage - 1)
        }
    }

    const handleRightArrow = () => {
        // update the state to next page
        if (activePage >= 0 && activePage <= 3) {
            handlePageChange(activePage + 1)
        }
    }

    const handleDelete = (id) => {

        if (allData?.allPlayers?.length) {

            let updatedAllPlayers = structuredClone(allData.allPlayers);
            updatedAllPlayers.map(player => {

                let updatedPlayer = player;
                if (!player.isBought && player.id === id) updatedPlayer.isBought = true
                return updatedPlayer;
            })

            setAllData({
                ...allData,
                allPlayers: updatedAllPlayers,
            })
        }
    }

    return (
        <div className='custom-table'>
            <ul className='market-card'>
                {slicedCards?.map((card) => {
                    return (
                        <li className='player-list' key={card.id}>
                            <Card
                                photoUrl={card.photoUrl}
                                price={card.price}
                                isBought={card.isBought}
                                handleDelete={handleDelete}
                                id={card.id}
                                balance={balance}
                                setBalance={setBalance}
                                setAllData={setAllData}
                                allData={allData}
                            />
                        </li>
                    )
                })}
            </ul>

            <div className='pagination'>
                <div className={activePage === 0 ? 'inactive-arrow' : 'left-arrow'} onClick={handleLeftArrow}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3333 11H1.66663M1.66663 11L11 20.3332M1.66663 11L11 1.6665" stroke="#979C9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                {updatedCards?.length > 0 && <div className='page-button' onClick={() => handlePageChange(0)}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill={activePage === 0 ? '#E8282B' : '#CDCFD0'} />
                        <path d="M12.5051 22V19.858H14.9891V13.252H12.8471V11.614C13.4711 11.494 13.9991 11.35 14.4311 11.182C14.8631 11.014 15.2831 10.81 15.6911 10.57H17.6351V19.858H19.7771V22H12.5051Z" fill="white" />
                    </svg>
                </div>}
                {updatedCards?.length > 10 &&
                    <div className='page-button' onClick={() => handlePageChange(1)}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 16C0 7.16344 7.16344 0 16 0V0C24.8366 0 32 7.16344 32 16V16C32 24.8366 24.8366 32 16 32V32C7.16344 32 0 24.8366 0 16V16Z" fill={activePage === 1 ? '#E8282B' : '#CDCFD0'} />
                            <path d="M12.7464 22V21.118C13.8984 19.966 14.8764 18.958 15.6804 18.094C16.4844 17.218 17.0964 16.432 17.5164 15.736C17.9364 15.028 18.1464 14.368 18.1464 13.756C18.1464 13.096 17.9664 12.556 17.6064 12.136C17.2464 11.716 16.7004 11.506 15.9684 11.506C15.4884 11.506 15.0444 11.644 14.6364 11.92C14.2284 12.184 13.8564 12.508 13.5204 12.892L12.6744 12.046C13.1544 11.518 13.6644 11.098 14.2044 10.786C14.7564 10.462 15.4044 10.3 16.1484 10.3C17.2164 10.3 18.0564 10.612 18.6684 11.236C19.2804 11.848 19.5864 12.664 19.5864 13.684C19.5864 14.404 19.3824 15.136 18.9744 15.88C18.5784 16.612 18.0264 17.386 17.3184 18.202C16.6224 19.006 15.8184 19.882 14.9064 20.83C15.2184 20.806 15.5424 20.782 15.8784 20.758C16.2144 20.734 16.5324 20.722 16.8324 20.722H20.1624V22H12.7464Z" fill="white" />
                        </svg>
                    </div>}
                {updatedCards?.length > 20 &&
                    <div className='page-button' onClick={() => handlePageChange(2)}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill={activePage === 2 ? '#E8282B' : '#CDCFD0'} />
                            <path d="M16.2744 22.216C15.3624 22.216 14.6004 22.054 13.9884 21.73C13.3764 21.394 12.8784 21.016 12.4944 20.596L13.2504 19.624C13.5984 19.984 14.0064 20.302 14.4744 20.578C14.9424 20.854 15.5124 20.992 16.1844 20.992C16.8804 20.992 17.4504 20.8 17.8944 20.416C18.3384 20.032 18.5604 19.522 18.5604 18.886C18.5604 18.43 18.4404 18.034 18.2004 17.698C17.9724 17.35 17.5884 17.08 17.0484 16.888C16.5204 16.696 15.8004 16.6 14.8884 16.6V15.466C15.7044 15.466 16.3464 15.37 16.8144 15.178C17.2944 14.986 17.6364 14.728 17.8404 14.404C18.0444 14.08 18.1464 13.72 18.1464 13.324C18.1464 12.76 17.9664 12.316 17.6064 11.992C17.2584 11.668 16.7784 11.506 16.1664 11.506C15.6864 11.506 15.2424 11.614 14.8344 11.83C14.4384 12.046 14.0664 12.328 13.7184 12.676L12.9264 11.74C13.3704 11.32 13.8624 10.978 14.4024 10.714C14.9424 10.438 15.5484 10.3 16.2204 10.3C17.2164 10.3 18.0384 10.558 18.6864 11.074C19.3344 11.578 19.6584 12.292 19.6584 13.216C19.6584 13.912 19.4664 14.482 19.0824 14.926C18.6984 15.37 18.1944 15.712 17.5704 15.952V16.024C18.2664 16.18 18.8544 16.51 19.3344 17.014C19.8144 17.506 20.0544 18.148 20.0544 18.94C20.0544 19.612 19.8864 20.194 19.5504 20.686C19.2144 21.178 18.7584 21.556 18.1824 21.82C17.6184 22.084 16.9824 22.216 16.2744 22.216Z" fill="white" />
                        </svg>
                    </div>}
                {updatedCards?.length > 30 &&
                    <div className='page-button' onClick={() => handlePageChange(3)}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill={activePage === 3 ? '#E8282B' : '#CDCFD0'} />
                            <path d="M13.8984 17.644H17.4984V14.314C17.4984 14.002 17.5104 13.63 17.5344 13.198C17.5584 12.766 17.5764 12.4 17.5884 12.1H17.5164C17.3724 12.376 17.2224 12.646 17.0664 12.91C16.9104 13.174 16.7484 13.444 16.5804 13.72L13.8984 17.644ZM17.4984 22V18.832H12.3324V17.86L17.2464 10.516H18.9024V17.644H20.4684V18.832H18.9024V22H17.4984Z" fill="white" />
                        </svg>
                    </div>
                }
                <div className={updatedCards?.length && (updatedCards.length / 10 <= activePage + 1) ? 'inactivearrow' : 'right-arrow'} onClick={handleRightArrow}>
                    <svg width="20.17" height="20.17" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.4697 1.13617C10.7626 0.843279 11.2375 0.843282 11.5304 1.13618L20.8638 10.4697C21.0044 10.6103 21.0834 10.8011 21.0834 11C21.0834 11.1989 21.0044 11.3897 20.8637 11.5303L11.5304 20.8635C11.2375 21.1564 10.7626 21.1564 10.4697 20.8635C10.1768 20.5706 10.1768 20.0957 10.4697 19.8028L18.5227 11.75H1.66675C1.25253 11.75 0.916748 11.4142 0.916748 11C0.916748 10.5858 1.25253 10.25 1.66675 10.25H18.5228L10.4697 2.19683C10.1768 1.90393 10.1768 1.42906 10.4697 1.13617Z" fill="#979C9E" />
                    </svg>
                </div>
            </div>
        </div>

    )
}

MarketCard.defaultProps = {
    cards: {},
    allData: {},
    setAllData: {}
}

MarketCard.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.any).isRequired,
    balance: PropTypes.number,
    setBalance: PropTypes.func.isRequired,
    setAllData: PropTypes.func.isRequired,
    allData: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default MarketCard;