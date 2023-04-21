import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'
function Header() {
    const navigate = useNavigate();
    return (
        <div className="header">
            {/* <img id='logo' src='./logo1.png' alt='logo' /> */}
            <img id='logo' src={require('../images/logo1.png')} alt="logo"/>
            <p id="brand">Talent-Recruiter</p>
            <div className="nav">
                <ul>
				<li>
					<Link style={{ textDecoration: 'none', color: 'black' }} to="/">Home</Link>
				</li>
				<li>
					<Link style={{ textDecoration: 'none', color: 'black' }} to="/about">About</Link>
				</li>
                <li>
					<Link style={{ textDecoration: 'none', color: 'black' }} to="/Contact">Contact</Link>
				</li>
			</ul>
            </div>
            <div className="btn">
                <button type="button" >Sign in</button>
                <button onClick={()=>navigate("/signup")} type="button" >Sign up</button>
            </div>
        </div>
    )
}

export default Header; 