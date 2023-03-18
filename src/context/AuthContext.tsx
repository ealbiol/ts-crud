import React from "react";
import { User } from "../types/User";
import { basicUser } from "../utils/BasicUser";

interface IAuthContext  {
    user : User;
    setUser: (user: User)=> void;
}

/**
 * Creating context for global state user.
 */
const AuthContext = React.createContext<IAuthContext>({
    user: basicUser,
    setUser: ()=>{},
});
export default AuthContext;
