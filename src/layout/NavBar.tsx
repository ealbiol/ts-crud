import React, { useContext, useState } from 'react';
import { navBarItems, entities } from "../db/data";
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { basicUser } from '../utils/BasicUser';
import SwitchModeButton from '../components/SwitchModeButton/index';

type NavBarProps = {
    themeData: string;
    setThemeData: React.Dispatch<React.SetStateAction<string>>;
};


export default function NavBar(props: NavBarProps) {
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
                                return ""; 
                            })
                        }

                    </div>
                    <div className="navBar-entities">
                        {entities?.map((item, id) => (
                            <div className="button-black ml-10px xxs:mb-10px md:mb-0" key={id}>
                                <span
                                    className='dark:text-black'
                                    onClick={handleEntity}
                                >
                                    {item.entity}
                                </span>
                                <span className="text-md">{item.emoji}</span>
                            </div>
                        ))}
                        <div className="button-black xxs:mb-10px sm:mb-0 ml-10px dark:text-black" onClick={handleLogout}>
                            Logout
                            <span className="text-md">👋</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='mt-20px dark:text-white'>Welcome back, {user.firstName}.</div>
                <div className='mt-20px'>
                    <SwitchModeButton themeData={props.themeData} setThemeData={props.setThemeData} />
                </div>
            </div>
        </div>
    )
}
