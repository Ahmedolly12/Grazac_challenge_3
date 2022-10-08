import React from 'react'
import "./Header.css"
import profile from "../../images/profile.png";
import cart from "../../images/cart.png";
import search from "../../images/search.png";

const Header = () => {
  return (
    <div>
        <div className="header-container">
            <div className="select-left">
                <select name="lang" id="lang">
                    <option value="EN">EN</option>
                    <option value="FR">FR</option>
                    <option value="ES">ES</option>
                    <option value="CS">CS</option>
                </select>
                <select name="lang" id="lang">
                    <option value="volvo">USD</option>
                    <option value="saab">GBP</option>
                    <option value="mercedes">CHF</option>
                    <option value="audi">NGN</option>
                </select>
            </div>
            <div className="profile-right">
                <p className='top'><img src={profile}/> My Profile</p>
                <img src={cart}/>
                <p className='top'>Items</p>
                <p></p>
                <p className="search">$0.00<img className="search"src={search}/></p>
            </div>
        </div>
    </div>
  )
}

export default Header