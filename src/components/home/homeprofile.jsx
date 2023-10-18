import DP from '../../images/image 15.png'
import styles from './profile.module.css';

const Profile = () => {
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


export default Profile