import React, { Component } from 'react';
import './sidnav.css';
import facebook from '../../assets/icons/icons8-facebook-64.png';
import prifilImage from '../../assets/icons/girl-749113_1280.jpg';
import twitter from '../../assets/icons/icons8-twitter-40.png';
import icoons from '../../assets/icons/a.png';
import home from '../../assets/icons/icons8-accueil-64.png';
import mailbox from '../../assets/icons/icons8-boîte-aux-lettres-liée-64.png';
import interfac from '../../assets/icons/icons8-diamant-64.png';
import miscellaneous from '../../assets/icons/icons8-classer-par-catégories-64.png';
import charts from '../../assets/icons/icons8-dynamique-positive-64.png';
import table from '../../assets/icons/icons8-lampe-de-table-64-1.png';
import appicon from '../../assets/icons/icons8-apple-app-store-64.png';
import formselement from '../../assets/icons/ab.png';
import pages from '../../assets/icons/a.png';
import {Link} from 'react-router-dom';

class SidNav extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="sid-bar-container">
                <div className="side-bar" >

                    <div className="profil">


                        <img src={prifilImage} alt="prifil image" className="imag-sidbar" />


                        <h4 className="name">Samar hudgens</h4>
                    </div>




                    <div className="icons-list">
                        <div className="icon-items">
                            <img src={facebook} alt="facebook image" className="icons-img" />
                        </div>
                        <div className="icon-items">
                            <img src={twitter} alt="twitter icon" className="icons-img" />
                        </div>
                        <div className="icon-items">
                            <img src={icoons} alt="another icon" className="icons-img" />
                        </div>
                    </div>

                </div>


                <div className="navbarsid-link">



                    <div className="links-logo" id="color">
                        <img src={home} alt="home icon" className="icon-img" />
                        <h5>  Ecommerce</h5>

                    </div>

                    <div className="links-logo">
                        <img src={mailbox} alt="mail box icon" className="icon-img" />
                        <h5>MailBox</h5>
                    </div>

                    <div className="links-logo">
                        <img src={interfac} alt="diamond icon" className="icon-img" />
                        <h5> Interface</h5>

                    </div>

                    <div className="links-logo">
                        <img src={miscellaneous} alt="miscellaneous icon" className="icon-img" />
                        <h5> Miscellaneous</h5>

                    </div>

                    <div className="links-logo">
                        <img src={charts} alt="charts icon" className="icon-img" />
                        <h5><a href="#">Charts</a></h5>

                    </div>

                    <div className="links-logo">
                        <img src={table} alt="data table icon" className="icon-img" />
                  <Link to="/Data-tables"> 
                        <h5>Data Tables</h5>
                    </Link> 

                    </div>
                    <div className="links-logo">
                        <img src={formselement} alt="forms elements icon" className="icon-img" />
                        <h5> Forms Elements</h5>
                    </div>
                    <div className="links-logo">
                        <img src={appicon} alt="app icone" className="icon-img" />
                        <h5>  App views</h5>

                    </div>
                    <div className="links-logo">
                        <img src={pages} alt="pages icon" className="icon-img" />
                        <h5>Pages</h5>

                    </div>
                </div>
            </div>


        )
    }
}

export default SidNav;