import React from 'react';
import "./Navbar.scss";

const Navbar = () => {
    return (
        <div className='nav show nav--black'>
            <button className='nav_burger'>...</button>
            <img src="./images/logo noir-rouge.png" alt="Netflix" className='nav_logo'></img>     
            <nav className='nav_links'>
                <a href="/" className='nav_link'>Accueil</a>
                <a href="/" className='nav_link'>Série</a>
                <a href="/" className='nav_link'>Film</a>
            </nav>  

           <div className='nav_actions'>
           <a href="/" className='nav_action'>Recherche</a>
           <a href="/" className='nav_action'>DIRECT</a>
           <a href="/" className='nav_action'>GIFT</a>
           <a href="/" className='nav_action'>Notif</a>
           <a href="/" className='nav_action'> <img src='./images/avatar.png'  className='nav_logo'></img></a>
            </div>    
        </div>
    );
};

export default Navbar;