import React from 'react'
import Detail from '../components/detail'
import News from '../components/news'
import Weather from "../components/weather"
import '../components/mainpage.css'
// import { useNavigate } from 'react-router-dom'
const Home = () => {
    //   const navigate = useNavigate()
    // const handleClick = () => {
    //     //   navigate('/Browse')
    // }
    return (
        <div>
            <div className='allpart' >
                <div className='detail-weather'>
                <div>
                    <Detail />
                </div>
                <div>
                    <Weather />
                </div>
                </div>
                <div>
                    <News/>
                </div>
             </div>
            {/* <button style={{ position: "absolute", bottom: "2vh", right: "3vw", background: "green", border: "none", color: "white", padding: "6px", borderRadius: "12px" }} onClick={handleClick}>Next Page</button> */}
        </div>
    )
}

export default Home