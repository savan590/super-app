import up from '../../images/Vector (3).png';
import down from '../../images/Vector (4).png';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import './timer.css'
import { useState} from 'react'
import tune1 from '../../tune.mp3'

const Timer = () => {
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)
    const [playing, setPlaying] = useState(false)
    const [key, setKey] = useState(0);


    const tuneandfinish = () => {
        let tune = new Audio(tune1);
        tune.play();
        setPlaying(false);
        setSeconds(0)
        setMinutes(0)
        setHours(0)
    }

    const increaseSecond = () => {
        if (seconds === 59) {
            setMinutes((min) => min + 1)
            setSeconds(0)
        }
        else {
            setSeconds((sec) => sec + 1)
        }
    }
    const increaseMinute = () => {
        if (minutes ===59) {
            setHours((hours) => hours + 1)
            setMinutes(0)
        } else {
            setMinutes((min) => min + 1)
        }
    }
    const increaseHour = () => {
        setHours((hours) => hours + 1)
    }
    const decreaseSecond = () => {
        if (seconds > 0) {
            setSeconds((sec) => sec - 1)
        }
    }
    const decreaseMinute = () => {
        if (minutes > 0) {
            setMinutes((min) => min - 1)
        }
    }
    const decreaseHour = () => {
        if (hours > 0) {
            setHours((hours) => hours - 1)
        }
    }

    let toggleTimer = () => {
        if (playing) {
            setKey((prevKey) => prevKey + 1);
            setPlaying(false);
            setSeconds(0)
            setMinutes(0)
            setHours(0)
        } else {
            setPlaying(true);
        }

    };


    function toHoursAndMinutes(totalSeconds) {
        const totalMinutes = Math.floor(totalSeconds / 60);

        const seconds = totalSeconds % 60;
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;

        return `${hours}:${minutes}:${seconds}`;
    }

    return (
        <div className='timer-container'>
            <div>
                <CountdownCircleTimer
                    isPlaying={playing}
                    duration={seconds + minutes * 60 + hours * 60 * 60}
                    colors={["#FF6A6A"]}
                    rotation='clockwise'
                    key={key}
                    size={160}
                    strokeWidth={8}
                    onComplete={tuneandfinish}
                >
                    {({ remainingTime }) =>
                        playing ? (
                            <span style={{ color: "white", fontSize: "1.5rem" }}>
                                {toHoursAndMinutes(remainingTime)}
                            </span>
                        ) : (
                            <span style={{ color: "white", fontSize: "1.5rem" }}>
                                {toHoursAndMinutes(0)}
                            </span>
                        )
                    }
                </CountdownCircleTimer>
            </div>
            <div style={{ width: "30vw", textAlign: "center" }}>
                <div className='display'>
                    <div className="section">
                        <p>Hours</p>
                        <img alt="" onClick={increaseHour} src={up} />
                        <p>{hours}</p>
                        <img alt="" onClick={decreaseHour} src={down} />
                    </div>
                    <div className="section">
                        <p>Minutes</p>
                        <img alt="" onClick={increaseMinute} src={up} />
                        <p>{minutes}</p>
                        <img alt="" onClick={decreaseMinute} src={down} />
                    </div>
                    <div className="section">
                        <p>Seconds</p>
                        <img alt="" onClick={increaseSecond} src={up} />
                        <p>{seconds}</p>
                        <img alt="" onClick={decreaseSecond} src={down} />
                    </div>
                </div>
                <button onClick={toggleTimer} className='timer-button'>
                    {playing ? 'Stop' : 'Start'}
                </button>
            </div>
        </div>
    );
};

export default Timer;




