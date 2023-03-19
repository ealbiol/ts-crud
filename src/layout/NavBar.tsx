import React, { useContext, useState } from 'react';
import { navBarItems, entities } from "../db/data";
import { Button } from "semantic-ui-react";
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { basicUser } from '../utils/BasicUser';

export default function NavBar() {
    const navigate = useNavigate();
    const [navBarSelected, setNavBarSelected] = useState<string>("Blog");
    const { user, setUser } = useContext(AuthContext)
    const handleEntity = (e: any) => {
        const newClickedEntity = e.target.innerHTML;
        setNavBarSelected(newClickedEntity)
        navigate(newClickedEntity.toLowerCase())
    }

    const handleLogout = () => {
        setUser(basicUser);
        localStorage.clear();
        navigate("/");
    }

    return (
        <div>
            <div className="navBar-wrapper">
                <div className='navBar-logo'>EDUARD ALBIOL CODE.</div>
                <div className='navBar-items-and-entities'>
                    <div className="navBar-items">
                        {
                            navBarItems.map((item) => {
                                if (item.name === navBarSelected) {
                                    return item.methods.map((method, id) => {
                                        return (
                                            <React.Fragment key={id}>
                                                <span className='navBar-item'>
                                                    {method} {item.label || item.name}
                                                </span>
                                            </React.Fragment>
                                        )
                                    })
                                }
                            })
                        }
                    </div>
                    <div className="navBar-entities">
                        {entities?.map((item, id) => (
                            <div className="button-black ml-10px xxs:mb-10px md:mb-0" key={id}>
                                <span
                                    onClick={handleEntity}>
                                    {item.entity}
                                </span>
                                <span className="text-md">{item.emoji}</span>
                            </div>
                        ))}
                        <div className="button-black xxs:mb-10px sm:mb-0 ml-10px" onClick={handleLogout}>
                            Logout
                            <span className="text-md">👋</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='mt-20px'>Welcome back, {user.firstName}.</div>
            </div>
        </div>
    )
}
