import AuthContext from '../context/AuthContext';
import NavBar from './NavBar';
import { useContext } from 'react';
import React, { useEffect, useState } from 'react';
import SwitchThemeButton from '../components/SwitchThemeButton';

const Layout = (props: any) => {
    const { children } = props;
    const { user } = useContext(AuthContext)

    //const [theme, setTheme] = useState<any>("light")

    //useEffect(() => {
    //    if (theme === "dark") {
    //        document.documentElement.classList.add("dark");
    //    } else {
    //        document.documentElement.classList.remove("dark");
    //    }
    //}, [theme])

    //const handleThemeSwitch = () => {
    //    setTheme(theme === "dark" ? "light" : "dark")
    //}

    return (
        <div>
            {/*<button className='bg-green-200 p-4 rounded-3xl' onClick={handleThemeSwitch}>DARK MODE</button>*/}
            <SwitchThemeButton />
            <div className='main-margin-page'>
                {user.id && (
                    <NavBar />
                )}
                {children}
            </div>
        </div>

    )
}

export default Layout;