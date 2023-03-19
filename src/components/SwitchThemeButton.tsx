import React, { useEffect, useState } from 'react';

export default function SwitchThemeButton() {

    const [theme, setTheme] = useState<any>("light")

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme])

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <button className='bg-green-200 p-4 rounded-3xl' onClick={handleThemeSwitch}>
            DARK MODE V2
        </button>
    )
}
