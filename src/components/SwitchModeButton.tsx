import React, { useEffect } from 'react';
import useTheme from "../hooks/useTheme";

type SwitchModeButtonProps = {
    themeData: string,
    setThemeData: React.Dispatch<React.SetStateAction<string>>
}

export default function SwitchModeButton({ themeData, setThemeData }: SwitchModeButtonProps) {    

    const handleSwitch = () => {
        const newThemeData = (themeData === "dark" ? "light" : "dark")
        setThemeData(newThemeData)
        localStorage.theme = newThemeData
    }

    return (

        <div>
            <input
                type="checkbox"
                className="checkbox"
                aria-label="Dark Mode checkbox"
                onChange={handleSwitch}
                checked={(themeData === "dark" ? true : false)}
            />
        </div>
    )
}