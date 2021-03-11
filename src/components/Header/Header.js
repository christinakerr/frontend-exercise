import React from 'react'
import "./Header.css"

function Header() {
    return (
        <div className="header-bg">
            <header>
                <img src="https://via.placeholder.com/36" alt="Placeholder avatar" />
                <div>
                    <h4>Julie Howard</h4>
                    <h6>Admin</h6>
                </div>
            </header>
        </div>
    );
}

export default Header;
