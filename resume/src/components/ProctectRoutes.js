import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import Login from "./Login";

const Proctect = () => {
    const isLogin = useSelector(state => state.auth.isLogin)
    return isLogin ? <Outlet /> : <Login />
}
export default Proctect