import React, { useContext, useState } from 'react';
import { navBarItems, entities } from "../db/data";
import { Button } from "semantic-ui-react";
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { basicUser } from '../utils/BasicUser';

export default function NavBar() {
    const navigate = useNavigate();
    const [navBarSelected, setNavBarSelected] = useState<string>("Blog");
    const {user, setUser} = useContext(AuthContext)
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
        <div className="flex items-center justify-between">
            <div className='font-bold text-lg'>EDUARD ALBIOL CODE.</div>
            <div>USER LOGGED: {user.firstName}</div>
            <div className='flex items-center text-md min-w-70% justify-between'>

                <div className="flex justify-center space-x-14">
                    {
                        navBarItems.map((item) => {
                            if (item.name === navBarSelected) {
                                return item.methods.map((method, id) => {
                                    return (
                                        <React.Fragment key={id}>
                                            <span className='text-sm '>
                                                {method} {item.label || item.name}
                                            </span>
                                        </React.Fragment>
                                    )
                                })
                            }
                        })
                    }
                </div>
                <div className="flex">
                    {entities?.map((item, id) => (
                        <span className="button-black flex justify-center items-center cursor-pointer" key={id}>
                            
                            <span
                                onClick={handleEntity}>
                                {item.entity}
                            </span>
                            <span className="text-md pl-2">{item.emoji}</span>
                        </span>
                    ))}
                </div>
            </div>
            <Button onClick={handleLogout}>
                Logout
            </Button>
        </div>
    )
}
