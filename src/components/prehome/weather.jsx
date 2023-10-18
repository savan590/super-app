import React, { useEffect, useState } from "react";
import style from '../components/weather.module.css';
import line from '../images/Line 2 (1).png'
import mbar from '../images/hum.png'
import wind from '../images/wind.png'
import group from '../images/Group.png'

const Weather = () => {
    const [date, setdate] = useState("");
    const [time, settime] = useState("");
    const [weather, setweather] = useState(false);

    useEffect(() => {
        const getweather = async () => {
            await fetch(`http://api.weatherapi.com/v1/current.json?key=4f66ceffebce4b87853113145231010&q=junagadh&aqi=no`)
                .then(async (i) => await i.json())
                .then((i) => setweather(i));
        }
        getweather();
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
        <div className={style.weather}>
            <div className={style.time_date}>
                <span>{date}</span>
                <span>{time}</span>
            </div>
            {weather ? (
                <div className={style.weatherinfo}>
                    <div>
                        <img alt="" src={weather.current.condition.icon} className={style.icon} />
                        <p style={{ fontSize: "24px" }}>{weather.current.condition.text}</p>
                    </div>
                    <div className={style.line}>
                        <img src={line} alt="" />
                    </div>
                    <div>
                        <p className={style.temperature}>
                            <span>{weather.current.temp_c}°C</span>
                        </p>
                        <p style={{ fontSize: "20px" }}>
                            <img src={mbar} alt="" className={style.mbar} />
                            {weather.current.pressure_mb} mbar
                            <br></br><span style={{ marginLeft: "30px" }}>Pressure</span>
                        </p>
                    </div>
                    <div className="line">
                        <img src={line} alt="" />
                    </div>
                    <div>
                        <p className={style.windinfo}>
                            <img src={wind} alt="" className={style.windicon} />
                            {weather.current.wind_kph} km/h
                            <br></br><span style={{ marginLeft: "30px" }}>Wind</span>
                        </p>
                        <p style={{ fontSize: "20px" }}>
                            <img src={group} alt="" className={style.hum} />
                            {weather.current.humidity}%
                            <br></br><span style={{ marginLeft: "30px" }}>Humidity</span>
                        </p>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default Weather;
