import PropTypes from 'prop-types'
import { Button, Modal, Space } from 'antd'
import numeral from 'numeral'
import './card.css'

const { confirm } = Modal;

const Card = ({ photoUrl, price, isBought, handleAdd, handleDelete, id, balance, setBalance }) => {

    const info = () => {
        Modal.info({
          title: "You don't have enough money",
          centered: true,
          okText: "Back",       
          onOk() {},
        });
      };
    
    const showSellConfirm = () => {
        confirm({
            title: `Would you like to sell the card for € ${numeral(price).format('0,0.00')}`,
            okText: 'Sell',
            okType: 'danger',
            cancelText: 'Cancel',
            centered: true,

            onOk() {
                handleAdd(id)
                setBalance(balance += price)
            },

            onCancel() {
                console.log('Cancel');
            },
        });
    };

    const showBuyConfirm = () => {
        confirm({
            title: `Would you like to buy the card for € ${numeral(price).format('0,0.00')}`,
            okText: 'Buy',
            okType: 'danger',
            cancelText: 'Cancel',
            centered: true,

            onOk() {
                balance >= price && handleDelete(id);
                balance >= price && setBalance(balance -= price);
            },

            onCancel() {
                console.log('Cancel');
            },
        });
    };

    return (
        <div>
            <img className='photo' width="198" height="286" src={photoUrl} alt='mycard' />
            <div className='price'>
                <span>€ {numeral(price).format('0,0.00')}</span>
                <Space wrap>
                    <Button danger
                    // onClick={() => onDelete(id)}
                        onClick={ !isBought && balance < price ? info : (isBought ? showSellConfirm : showBuyConfirm)}
                    >{ isBought ? 'Sell' : 'Buy' }</Button>
                </Space>
            </div>
        </div>
    )
}

Card.propTypes = {
    balance: PropTypes.number,
    setBalance: PropTypes.func.isRequired,
    isBought: PropTypes.bool,
    photoUrl: PropTypes.string,
    price: PropTypes.number,
    handleAdd: PropTypes.func,
    handleDelete: PropTypes.func,
    id: PropTypes.string
  }

export default Card