import React from "react";

const Navbar: React.FC = () => {
    return (
        <div className="navbar">
            <span className="logo">Chat App</span>
            <div className="user">
                <img src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile" />
                <span>Sarah</span>
                <button>logout</button>
            </div>
        </div>
    )
}

export default Navbar
