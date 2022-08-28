import React from 'react'
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
const Github = () => {
    const navigate = useNavigate()
    const [formdata, setForm] = useState({
        username: ""
    })
    const Search = () => {
        navigate(`/username/${formdata.username}`)
    }
    return (
        <div className='flex flex-col space-x-4 justify-center items-center h-screen'>
            <h1 className='text-2xl text-gray-500'>Enter your github username</h1>
            <form className='flex space-x-4 justify-center items-center'>
                <input className='border-2 border-sky-500 w-[400px] ' placeholder='username' type="text" value={formdata.username} onChange={(e) => setForm({ ...formdata, username: e.target.value })} />
                <input type="submit" className='bg-sky-500 px-4 py-2 rounded text-white' onClick={Search} />
            </form>
        </div>
    )
}

export default Github