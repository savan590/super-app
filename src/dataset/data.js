import action from '../images/image 2.png'
import drama from '../images/image 3.png'
import romance from '../images/image 4.png'
import thriller from '../images/image 6.png'
import western from '../images/image 7.png'
import horror from '../images/image 8.png'
import fantasy from '../images/image 9.png'
import music from '../images/image 10.png'
import fiction from '../images/image 11.png'
import styles from '../styling/category.module.css'

export const data = [
    {
        id: 1,
        label: "Action",
        color: "#FF5209",
        image: <img className={styles.movie} src={action} alt='' />,
    },

    {
        id: 2,
        label: "Drama",
        color: "#D7A4FF",
        image: <img className={styles.movie} src={drama} alt='' />,
    },

    {
        id: 3,
        label: "Romance",
        color: "#11B800",
        image: <img className={styles.movie} src={romance} alt='' />,
    },

    {
        id: 4,
        label: "Thriller",
        color: "#84C2FF",
        image: <img className={styles.movie} src={thriller} alt='' />,
    },

    {
        id: 5,
        label: "Western",
        color: "#902500",
        image: <img className={styles.movie} src={western} alt='' />,
    },

    {
        id: 6,
        label: "Horror",
        color: "#7358FF",
        image: <img className={styles.movie} src={horror} alt='' />,

    },

    {
        id: 7,
        label: "Fantasy",
        color: "#FF4ADE",
        image: <img className={styles.movie} src={fantasy} alt='' />,
    },

    {
        id: 8,
        label: "Music",
        color: "#E61E32",
        image: <img className={styles.movie} src={music} alt='' />,

    },

    {
        id: 9,
        label: "Fiction",
        color: "#6CD061",
        image: <img className={styles.movie} src={fiction} alt='' />,
    },
];
