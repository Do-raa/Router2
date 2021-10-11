import React from 'react'; 
import {Link,NavLink} from "react-router-dom"; 
import {useContext} from 'react'; 
import { AuthContext } from '../Context/AuthContext';

const NavBar = () => { 
    const {isloggedIn , setIsLoggedIn} = useContext(AuthContext);
    return ( 
        <nav> 
            <NavLink className="Logo" to="/">Brand-Logo</NavLink> 
            <div className="nav-Links"> 
            <NavLink className ="Link" to="/about">About</NavLink>
            <NavLink className ="Link" to="/contact">Contact</NavLink> 
            <NavLink className ="Link" to="/blog">Blog</NavLink>
             <button onClick={()=>setIsLoggedIn(isloggedIn)}>{isloggedIn? "Logout" : "Login" }</button>
             </div>
            
            </nav> 
            
            );}


       /* <div>
            <ul> 
                <li><Link to="/">Home</Link></li> 
                <li><Link to="/about">About</Link></li> 
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
        </div>
    )
}*/

export default NavBar;
