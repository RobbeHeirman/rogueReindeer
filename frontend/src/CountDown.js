import './assets/css/Countdown.css'

const {useEffect} = require("react");
const {useState} = require("react");


const CountDown = () => {
    const generateCountdown = () => {

        const releaseTime = new Date(2021, 11, 16, 19, 0, 0, 0)
        const dateNow = new Date()
        let millSeconds =  releaseTime - dateNow;
        const seconds = millSeconds / 1000
        let d = Math.floor(seconds / (3600 * 24));
        let h = Math.floor(seconds % (3600 * 24) / 3600);
        let m = Math.floor(seconds % 3600 / 60);
        let s = Math.floor(seconds % 60);
        return {
            day: d,
            hour: h,
            minute: m,
            second: s
        }
    }

    const [date, setDate] = useState(generateCountdown());

    useEffect(() => {
        setTimeout(() => {
            setDate(generateCountdown());
        }, 1000);
    });

    return <div className="countdown">
        <div className="card">
            <div className="countdown-value">{date.day}</div>
            <div className="countdown-unit">Days</div>
        </div>

        <div className="card">
            <div className="countdown-value">{date.hour}</div>
            <div className="countdown-unit">Hours</div>
        </div>

        <div className="card">
            <div className="countdown-value">{date.minute}</div>
            <div className="countdown-unit">Minutes</div>
        </div>
        <div className="card">
            <div className="countdown-value">{date.second}</div>
            <div className="countdown-unit">Seconds</div>
        </div>
    </div>
}

export default CountDown