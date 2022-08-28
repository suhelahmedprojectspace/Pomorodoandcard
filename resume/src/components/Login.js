import React from 'react'
import { GoogleButton } from 'react-google-button'
import { singInWithGoogle } from '../firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../redux/authSlice'

const Login = () => {
    const getuser = localStorage.getItem('user')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handlelogin = () => {
        singInWithGoogle()
        if (getuser) {
            dispatch(login())
            navigate('/pomorodo')
        }
    }
    return (
        <div className='flex items-center justify-center h-screen space-x-4'>
            <GoogleButton onClick={handlelogin} />

        </div>
    )
}

export default Login