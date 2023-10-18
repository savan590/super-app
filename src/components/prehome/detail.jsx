import DP from '../images/image 14.png'
// import Select from "./Select"
import styles from './detail.module.css';

const Detail = () => {
    const username = JSON.parse(window.localStorage.getItem('UserName'));
    const name = JSON.parse(window.localStorage.getItem('Name'));
    const email = JSON.parse(window.localStorage.getItem('Email'));
    const cards = JSON.parse(window.localStorage.getItem('cards'));

    return (
        <div className={styles.information}>
            <div className={styles.photo}>
                <img src={DP} alt="" />
            </div>
            <div className={styles.alldetails}>
                <div className={styles.personaldetail}>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.email}>{email}</p>
                    <p className={styles.username}>{username}</p>
                </div>
                <div className={styles.scroll}>
                    {cards.map((category,id) => (
                        <button className={styles.category} key={id}>{category}</button>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default Detail