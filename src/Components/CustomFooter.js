import React from 'react';
import {Link} from 'react-router-dom'
import './CustomFooter.css'
const CustomFooter =(props)=>(
    <footer className="footer-container">
        <p className="footer-general">
            © Damage to Kill Overwatch 2019
        </p>
        <p className="footer-general">
           <Link to='/about'className="footer-link"> About</Link> | <Link to='/faq'className="footer-link">F.A.Q </Link>
        </p>
    </footer>
);

export default CustomFooter;