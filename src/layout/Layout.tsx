import AuthContext from '../context/AuthContext';
import NavBar from './NavBar';
import { useContext } from 'react';
import React, { useState, useEffect } from 'react';
import ThemeContext from "../context/ThemeContext";


const Layout = (props: any) => {
    const { children } = props;
    const { user } = useContext(AuthContext)

    const [themeData, setThemeData] = useState<any>("")

    useEffect(() => {
        if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setThemeData("dark")
            document.documentElement.classList.add('dark')
        } else {
            setThemeData("light")
            document.documentElement.classList.remove('dark')
        }

        setThemeData(
            localStorage?.length !== 0 && localStorage?.theme !== undefined ? localStorage?.theme : (
                window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"
            ))
    }, [themeData])

    return (
        <ThemeContext.Provider value={themeData} >
            <div>
                <div>
                    <div className='main-margin-page'>
                        {user.id && (
                            <NavBar themeData={themeData} setThemeData={setThemeData} />
                        )}
                        {children}
                    </div>
                </div>
            </div>
        </ThemeContext.Provider >
    )
}

export default Layout;