import  React, { Component } from 'react';
import './navbar.css'
import mail from '../../assets/icons/icons8-email-64.png';
import profil from '../../assets/icons/icons8-sophia-loren-48.png';
import meesage from '../../assets/icons/icons8-messagerie-48.png';
import logo from '../../assets/icons/icons8-logo-dauphin-96.png';
import { Link } from 'react-router-dom';
 
class Navbar extends Component{
    
    
    render(){
        return(
            <div>
                <nav className="navbar">
                    <div className="image-logo">
                     <Link to="/">
                    
                         <img src={logo} alt="logo imae" /> 
                    </Link>
                    
                    </div>
                    <div className="search-form">
                        <form>
                            <input type="text"/>
                        </form>
                    </div>

                  

                    <ul className="list-nav">
                        
                        <li className="nav-item">
                            <button className="item-btn">

                            <img src={mail} alt="mail image" />
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="item-btn">

                            <img src={meesage} alt="messae icon" />
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="item-btn">

                            <img src={profil} alt="profil icon" />
                            </button>
                        </li>
                        {/* <li><img src={} alt="" /></li>  */}
                    </ul>

               

                </nav>

            </div>
        )
    }
    
}

export default Navbar;