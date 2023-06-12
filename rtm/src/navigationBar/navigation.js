import './navigation.css';
import logo from '../assets/images/blackfroglogo.png'
const nav = () => {
  return (<div className='navigation_parent'>
    <div className="navigation">
      <div className='blackfroglogo'>
        <img src={logo} alt='No image found ' className='blackfroglogo_img'></img>
        <h1 className='blackfrogHeading'>BlackFrog</h1>
      </div>

      <div className='homepage_login_icon_div'>
        <h1 className='userName'>admin</h1>
        <div className="homepage_login_icon">
          <h1>A</h1>
        </div>
      </div>
      
    </div>
  </div>);
};

export default nav;