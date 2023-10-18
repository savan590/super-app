import { useEffect, useState } from "react"
import styles from "./news.module.css"
import defaultimg from "../images/tree.jpg"
// const apiKey = process.env.apiKEY

const News = () => {
    const [news, setnews] = useState("")
    const [date, setdate] = useState("")
    const [time, settime] = useState("")
    // console.log(news)
    // useEffect(() => {
    //     const fetchNews = async () => {
    //         await fetch(`https://newsdata.io/api/1/news?apikey=pub_31068119c9fd7090639caa2e4869319d85f36&q=pegasus&language=en`)  //data extract
    //             .then(async (data) => await data.json())   //data json format
    //             .then((result) => setNews(result.results[20]))   //utilization
    //     }
    //     fetchNews();
    // }, [])

    useEffect(() => {
        const getnews = async () => {
            try {
                const response = await fetch(`https://newsdata.io/api/1/news?apikey=pub_31068119c9fd7090639caa2e4869319d85f36&q=pegasus&language=en`);
                const data = await response.json();

                if (Array.isArray(data.results)) {
                    setnews(data.results[3]);
                }
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        }

        getnews();
    }, []);

    useEffect(() => {
        const date = new Date();
        const hours = date.getHours();
        const mins = date.getMinutes();
        const am_pm = hours >= 12 ? 'pm' : 'am';
        const newformatedhours = hours % 12 || 12;
        const min_less_ten = mins < 10 ? `0${mins}` : mins;
        const time = `${newformatedhours}:${min_less_ten} ${am_pm}`;
        settime(time);
    }, [settime]);

    useEffect(() => {
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth(); 
        let dd = today.getDate();

        const month = (mm < 10) ? `0${mm}` : mm;
        const date = (dd < 10) ? `0${dd}` : dd;

        const currentdate = date + '-' + month + '-' + yyyy;
        setdate(currentdate)
    }, [setdate]);

    return (
        <div className={styles.news}>
            {news.image_url ? (
                <img src={news.image_url} alt="" className={styles.image} />
            ) : (
                <img src={defaultimg} alt="" className={styles.image} />
            )}
            <div className={styles.middletext}>
                <p className={styles.title}>{news.title}</p>
                <span className={styles.date}>{date}</span>
                <span className={styles.time}>| {time}</span>
            </div>
            <div className={styles.content}>
                {news.content}
            </div>
        </div>
    );
}

export default News