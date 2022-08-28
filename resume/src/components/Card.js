import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import moment from 'moment'
import { RiGitRepositoryLine } from 'react-icons/ri'
import { AiOutlineStar } from 'react-icons/ai'
const Card = () => {

    const username = useParams().user
    const [data, setData] = useState([])
    const [date, setDate] = useState("")
    const sendRequest = async (req, res) => {
        const result = await fetch(`https://api.github.com/users/${username}`)
        const response = await result.json()
        return response
    }
    useEffect(() => {
        sendRequest().then(res => setData(res)).then(() => setDate(data.created_at))
    }, [])
    const fordata = moment(date).format('YYYY-MM-DD')
    return (
        <div className='flex flex-col justify-center items-center h-screen'>

            {[data].map((value, i) => (
                <div key={i} className="bg-slate-900 text-white p-8 items-center shadow-sky-700 shadow-lg rounded-md">

                    <img src={value.avatar_url} alt={value.name} className="w-[200px] rounded-full" />

                    <h1 className='text-xl font-semibold text-center mt-2 mb-2'>{value.name}</h1>
                    <div className='flex space-x-2'>
                        <AiOutlineStar className='text-xl' />
                        <h1 className='text-md font-semibold'>{value.public_gists} gists</h1>
                    </div>
                    <div className='flex space-x-2'>
                        <RiGitRepositoryLine className='mt-2 text-xl' /><h1 className='text-md font-semibold mt-1 '>{value.public_repos}  Repositories</h1>
                    </div>
                    <h1 className='flex space-x-2 font-semibold mt-2'>created on :{fordata}</h1>
                </div>
            ))}

        </div>
    )
}

export default Card