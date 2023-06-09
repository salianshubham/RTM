import './Home.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';
import Navigationbar from '../navigationBar/navigation';
import Homecard from '../cards/homeCards';
import Centertable from '../centerTable/centerTable';
function Home() {
    const nav = useNavigate();
    const callHomePage = async () => {
        try {
            const res = await fetch('/home', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (error) {
            nav("/")
        }
    }
    // function call it load only once when it opens first time
    useEffect(() => {
        callHomePage();
    }, [])

    return (
        <div className='main'>
            <div className='Sidebar_home'>
                <Sidebar />
            </div>
            <div className='Navigationbar_home'>
                <Navigationbar />
            </div>
            <div className='cards_home'>
                <Homecard />
            </div>
            <div className='cards_home'>
                <Centertable />
            </div>
        </div>)

}

export default Home;
