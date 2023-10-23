import React, { useEffect, useState } from "react";
import style from './Hweather.module.css';
import line from '../../images/Line 2 (1).png'
import mbar from '../../images/hum.png'
import wind from '../../images/wind.png'
import group from '../../images/Group.png'

const Weather = () => {
    const [date, setdate] = useState("");
    const [time, settime] = useState("");
    const [weather, setweather] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.weatherapi.com/v1/current.json?key=4f66ceffebce4b87853113145231010&q=junagadh&aqi=no');
                const data = await response.json();
                setweather(data);
            }
            catch (error) {
                console.error('Error :', error);
            }
        };
        fetchData();
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
        <div className={style.weather}>
            <div className={style.time_date}>
                <span>{date}</span>
                <span>{time}</span>
            </div>
            {weather ? (
                <div className={style.weatherinfo}>
                    <div>
                        <img alt="" src={weather.current.condition.icon} className={style.icon} />
                        <p style={{ fontSize: "18px", fontWeight: "600" }}>{weather.current.condition.text}</p>
                    </div>
                    <div className={style.line}>
                        <img src={line} alt="" />
                    </div>
                    <div>
                        <p className={style.temperature}>
                            <span>{weather.current.temp_c}°C</span>
                        </p>
                        <p style={{ fontSize: "15px", fontWeight: "600", marginBottom: "50px" }}>
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
                        <p style={{ fontSize: "15px", fontWeight: "600", marginBottom: "40px" }}>
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
