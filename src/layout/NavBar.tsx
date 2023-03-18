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
            <div style={{ border: "1px solid pink" }} className="flex items-center justify-between xs:flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row ">
                <div className='font-bold xxs:text-lg xs:text-lg sm:text-xl md:text-xl lg:text-xl xl:text-lg xxl:text-lg'>EDUARD ALBIOL CODE.</div>
                <div
                    style={{ border: "4px solid black" }}
                    className='flex items-center text-md xxl:min-w-70% justify-between xl:items-end xxl:items-center xxs:flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-col xxl:flex-row'
                >
                    <div style={{ border: "1px solid red" }}
                        className="flex xxs:flex-col sm:flex-row justify-center xxs:space-x-0 sm:space-x-12 xl:mx-0 xxl:mx-20px">
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
                    <div style={{ border: "1px solid blue" }}
                        className="flex  xxs:flex-col xxs:items-center xxs:min-w-500px sm:flex-row xxs:mt-20px justify-between xl:mt-20px xxl:mt-0">
                        {entities?.map((item, id) => (
                            <button style={{ border: "2px solid brown" }} className="button-black xxs:mb-10px sm:mb-0" key={id}>
                                <span
                                    onClick={handleEntity}>
                                    {item.entity}
                                </span>
                                <span className="text-md">{item.emoji}</span>
                            </button>
                        ))}
                        <div style={{ border: "2px solid brown" }} className="button-black xxs:mb-10px sm:mb-0" onClick={handleLogout}>
                            Logout
                            <span className="text-md ">👋</span>
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
