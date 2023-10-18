import { useEffect, useState } from "react"
import styles from "./Hnews.module.css"
import defaultimg from "../../images/tree.jpg"

const News = () => {
    const [news, setnews] = useState("")
    const [date, setdate] = useState("")
    const [time, settime] = useState("")

    useEffect(() => {
        const getnews = async () => {
            try {
                const response = await fetch(`https://newsdata.io/api/1/news?apikey=pub_31068119c9fd7090639caa2e4869319d85f36&q=pegasus&language=en`);
                const data = await response.json();
                setnews(data.results[1]);
                
            } catch (error) {
                console.error("Error :", error);
            }
        }

        getnews();
    }, []);

    useEffect(() => {
        const currentDate = new Date();

        const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
        const formattedTime = currentDate.toLocaleTimeString('en-US', timeOptions);
        settime(formattedTime);

        const dateComponents = currentDate.toLocaleDateString('en-US').split('/');
        const formattedDate = dateComponents.join('-');
        setdate(formattedDate);
    }, [settime, setdate]);

    return (
        <div className={styles.news}>
            <img src={news.image_url || defaultimg} alt="" className={styles.image} />
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



