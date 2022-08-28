import React from 'react'
import { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Pomorodo = () => {

    const [bgcolor, setBgcolor] = useState('bg-sky-500')
    const [message, setMessage] = useState(false)
    const [minutes, setMinutes] = useState(25)
    const [second, setSecond] = useState(59)


    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval)
            if (second === 0 && minutes !== 0) {
                setSecond(59)
                setMinutes(minutes - 1)
            }
            else if (second === 0 && minutes === 0) {
                let minutes = 4
                let seconds = 59

                setSecond(seconds)
                setMinutes(minutes)
                setMessage(true)
                setBgcolor('bg-red-500')
            }
            else {
                setSecond(second - 1)
            }
        }, 1000)
    }, [second])
    const Restart = () => {
        let minutes = 25
        setBgcolor('bg-sky-500')
        setMinutes(minutes)
        setMessage(false)
    }
    const min = minutes > 10 ? minutes : `0${minutes}`
    const sec = second > 10 ? second : `0${second}`
    const percentage = (min / 25) * 100

    return (
        <div className={`flex flex-col justify-center items-center h-screen ${bgcolor}`} >
            {message ? <div className='flex space-x-2'> <h1 className='text-center text-4xl font-semibold mb-4 text-white'>Break time</h1><img src="https://img.icons8.com/color/48/000000/bell.png" /> </div> : ""}
            <div className='flex flex-col bg-gray-900 text-white p-8 shadow-xl rounded-sm'>
                <h1 className='text-center text-2xl font-semibold  mb-4'>Promodoro timer</h1>

                <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbar
                        styles={buildStyles({
                            textColor: 'white',
                            backgroundColor: '#3e98c7',
                        })}
                        value={percentage}
                        text={`${min}:${sec}`}
                    />
                </div>

            </div>

            <button className='mt-4 text-black rounded py-2 px-4 bg-white' onClick={Restart}>Restart</button>

        </div>
    )
}

export default Pomorodo


