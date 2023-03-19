import React from "react";
import { Theme } from "../types/Theme";
import { darkTheme } from "../utils/DarkTheme";

interface ThemeContext  {
    theme : Theme;
    setUser: (theme: Theme)=> void;
}

/**
 * Creating context for global state theme.
 */
const AuthContext = React.createContext<ThemeContext>({
    theme: darkTheme,
    setUser: ()=>{},
});
export default AuthContext;
