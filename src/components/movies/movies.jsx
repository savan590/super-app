import { useEffect, useState } from "react"
import styles from './Movie.module.css'
import x from '../../images/image 2.png'


const List = ({ card }) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '276d50cb00msh85396f78d1828f4p185e33jsnc7b821e2f0e3',
                // 'X-RapidAPI-Key': '0b9012d018msh6705e40f579651fp1a9cdcjsn8feb7eda7793',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };
        const Movies = async () => {
            const response = await fetch(`https://moviesdatabase.p.rapidapi.com/titles?genre=${card}&year=2020`, options)
            const data = await response.json();
            // console.log(data)
            setMovies(data.results.splice(4,4));
        }
        Movies();
    }, [card])

    return (
        <>
            <p className={styles.heading}>{card}</p>
            <div className={styles.listcontainer}>
                {movies.map((movie, idm) => (
                    <div key={idm} className={styles.listitem}>
                        {movie && movie.primaryImage && movie.primaryImage.url ? (
                            <img src={movie.primaryImage.url} alt='' />
                        ) : (
                            <img src={x} alt='' />
                        )}
                    </div>
                ))}
            </div>
        </>
    )
}

export default List

