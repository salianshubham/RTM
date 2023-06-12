import './homeCards.css';
import { CiTempHigh } from 'react-icons/ci'
import { BsFillDoorOpenFill } from 'react-icons/bs'
import { GiBattery75 } from 'react-icons/gi'
import { ImLocation2 } from 'react-icons/im'
const homecard = () => {
  return (<div className='homeCard_parent'>
    <div className='homeCard_outer_div'>
      <div className='total_center'>
        <div className='total_center_icon'>
          <ImLocation2 className='card_icon' />
        </div>
        <h4>Total Center</h4>
        <h1>13</h1>
      </div>
      <div className='temperature_violation'>
        <div className='total_center_icon'>
          <CiTempHigh className='card_icon' />
        </div>
        <h4>Temperature violation</h4>
        <h1>3</h1>
      </div>
      <div className='door_violation'>
        <div className='total_center_icon'>
          <BsFillDoorOpenFill className='card_icon' />
        </div>
        <h4>Door Violation</h4>
        <h1>0</h1>
      </div>
      <div className='battery_violation'>
        <div className='total_center_icon'>
          <GiBattery75 className='card_icon' />
        </div>
        <h4>Battery Violation</h4>
        <h1>0</h1>
      </div>
    </div>
  </div>);
};

export default homecard;