import React from 'react';

function Navbar() {
    return (
        <nav>
            <a href="#" className="logo">AsmrProg</a>
            <div className="links">
                <a href="#">Home</a>
                <a href="#">Features</a>
                <a href="#">Blog</a>
                <a href="#">About Us</a>
            </div>
            <div className="login">
                <button className="signup">Get Started</button>
                <button>Login</button>
            </div>
        </nav>
    );
}

export default Navbar;
