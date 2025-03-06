import {LOGO_URL} from "../utils/constants"
import { useState } from "react"
export const Header = ()=>{
    const [loginBtn, setLoginBtn] = useState("Login")
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL}/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
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