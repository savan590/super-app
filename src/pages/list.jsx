import List from "../components/movies/movies"
import Profile from '../images/dp.png'
import Profile1 from '../images/Super.jpg'
import { useNavigate } from 'react-router-dom'
const Movies = () => {
    const movies = JSON.parse(window.localStorage.getItem("cards"))
    const navigate = useNavigate();
    const handleClick= () => {
        navigate('/')
    }
    return (
        <>
            <img alt="" onClick={handleClick} src={Profile} style={{ position: "absolute", top: "30px", right: "75px", height: "50px", width: "50px" }} />
            <div style={{ width: "100vw", height: "98vh", background: "black", overflowX: "hidden" }}>
                <img src={Profile1} alt="" style={{marginTop:"25px",marginLeft:"22px",width:"10%"}}/>
                <p style={{ fontFamily: 'Roboto', fontStyle: "normal", color: "white", fontSize: "30px", marginLeft: "4vw" ,marginTop:"20px"}}>Entertainment according to your choice</p>
                {movies.map((movie,i) => <List id={i} card={movie} />)}
            </div>
        </>
    )
}


export default Movies