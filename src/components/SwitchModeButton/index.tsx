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
        <div>
            {/*<input
                type="checkbox"
                className="checkbox"
                aria-label="Dark Mode checkbox"
                onChange={handleSwitch}
                checked={(themeData === "dark" ? true : false)}
                style={{
                    position: "relative",
                    appearance: "none",
                    width: "70px",
                    height: "30px",
                    borderRadius: "20px",
                    backgroundColor: themeData === "dark" ? "red" : "#6E6E6E",
                    marginRight: "10px",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                    WebkitTapHighlightColor: "transparent",
                }}
            />
            <span>{themeData === "dark" ? <span className='dark:text-white'>Dark</span> : <span>Light</span>}</span>*/}


            <label className="switch">
                <input 
                type="checkbox" 
                onChange={handleSwitch}
                checked={(themeData === "dark" ? true : false)}
                />
                <span className="slider round"></span>
            </label>

        </div>
    )
}