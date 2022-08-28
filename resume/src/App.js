import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import Pomorodo from './components/Pomorodo';
import Github from './components/Github';
import Card from './components/Card';
import Login from './components/Login';
import Proctect from './components/ProctectRoutes';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from './firebase'
import { signOut } from 'firebase/auth'
import { logout } from './redux/authSlice'

function App() {
  const dispatch = useDispatch()
  const isLogin = useSelector(state => state.auth.isLogin)
  const handleSignout = () => {
    signOut(auth)
    dispatch(logout())
    localStorage.removeItem('user')
  }
  return (
    <div>
      <nav className='flex justify-center items-center space-x-4'>
        <Link to="/pomorodo" className='text-xl font-semibold'>Promodoro</Link>
        <Link to="/github" className='text-xl font-semibold'>Github</Link>
        {isLogin ? <button className='bg-red-500 text-white py-2 px-4 rounded text-md font-semibold' onClick={handleSignout}>Signout</button> : ""}
      </nav>

      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route element={<Proctect />}>
          <Route path="/pomorodo" element={<Pomorodo />} />
          <Route path="/github" element={<Github />} />
          <Route path="/username/:user" element={<Card />} />

        </Route>

      </Routes>


    </div>
  )
}

export default App;
