import './navigation.css';
import logo from '../assets/images/blackfroglogo.png'
const nav = () => {
  return (<div className='navigation_parent'>
    <div className="navigation">
      <div className='blackfroglogo'>
        <img src={logo} alt='No image found ' className='blackfroglogo_img'></img>
      </div>
      <h1 className='blackfrogHeading' >BlackFrog</h1>
    </div>
  </div>);
};

export default nav;