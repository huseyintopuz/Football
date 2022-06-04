import { useState } from 'react'
import PropTypes from 'prop-types'
import { Menu, Slider } from 'antd';
import './cardfilter.css'


const CardFilter = ({ setAllData, allData }) => {
    const [current, setCurrent] = useState('1');

    const onClick = (e) => {
        const updatedPlayers = [...allData?.allPlayers || []];
        updatedPlayers.map(player => {
            if (player.cardType === e.key || player.position === e.key) {
                player.isHidden = false;
            } else {
                player.isHidden = true;
            }
            return false;
        })

        setAllData({
            ...allData,
            allPlayers: updatedPlayers
        })
        setCurrent(e.key);
    };

    const formatter = (values) => {
        const minValue = values[0];
        const maxValue = values[1];
        const updatedPlayers = [...allData?.allPlayers || []];
        let exception = 0;
        let valid = 0;
        
        updatedPlayers.map(player => {

            if ( minValue <= player.price && maxValue >= player.price) {
                valid = valid += 1;

                return player.isHidden = false;
            } else {
                exception = exception += 1;
                return player.isHidden = true;
            }
            
        });
        
        setAllData({
            ...allData,
            allPlayers: updatedPlayers
        })
    }

    function getItem(label, key, children, type) {

        return {
            label,
            key,
            children,
            type,
        };
    }

    const items = [
        getItem('Card Type', 'sub1', [
            getItem('Gold(1)', 'Gold'),
            getItem('Silver(1)', 'Silver'),
            getItem('Bronze(1)', 'Bronze'),
        ]),

        getItem('Position', 'sub2', [
            getItem('Goalkeeper(1)', 'Goalkeeper'),
            getItem('Defender(1)', 'Defender'),
            getItem('Midfielder(1)', 'Midfielder'),
            getItem('Forward(1)', 'Forward')
        ]),

        getItem('Price', 'sub3', [
            getItem(
                <Slider
                    className='slider-price'
                    range
                    defaultValue={[0, 26]}
                    step={10}
                    min={0}
                    max={30}
                    onAfterChange={formatter}

                />
            ),
        ]),
    ];


    return (
        <div className='dropdown'>
            <Menu inlineIndent={0}
                onClick={onClick}

                style={{
                    width: 256,
                    paddingLeft: 0,
                }}

                defaultOpenKeys={['sub1']}
                selectedKeys={[current]}
                mode="inline"
                items={items}
            />
            <div className='border' />
        </div>
    )
}

CardFilter.defaultProps = {
    allData: {},
    setAllData: {}
}

CardFilter.propTypes = {
    setAllData: PropTypes.func.isRequired,
    allData: PropTypes.objectOf(PropTypes.any).isRequired,
  }

export default CardFilter