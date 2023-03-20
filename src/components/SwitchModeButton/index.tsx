import React from 'react';
import "./SwitchModeButton.css"

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
        <label className="switch">
            <input
                type="checkbox"
                onChange={handleSwitch}
                checked={(themeData === "dark" ? true : false)}
            />
            <span className="slider round"></span>
        </label>
    )
}