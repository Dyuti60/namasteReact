import {LOGO_URL} from "../utils/constants"
import { useState,useEffect} from "react"
import { Link } from "react-router"
import About from "./About"
export const Header = ()=>{
    const [loginBtn, setLoginBtn] = useState("Login")
    useEffect(()=>{
        console.log("useEffect called")
    },[loginBtn])
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL}/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li>Services</li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <button className="login-btn" onClick={()=>{
                        if (loginBtn=="Login"){
                        setLoginBtn("Logout")
                        } else {
                        setLoginBtn("Login")
                        }
                    }}>{loginBtn}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header