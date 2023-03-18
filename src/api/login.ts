import { Login } from "../types/Login";
import { User } from "../types/User";

import {URL} from "./config";
export const login = async (formValues: Login) => {
    const response = await fetch(`${URL}/users`);
    // Mocks login logic
    // In a real project this would be done on backend
    const responseLogin = await response.json();
    const foundUser = responseLogin.find((user: User)=>user.email === formValues.email);
    if (foundUser){
        if (foundUser.password === formValues.password){
           return {
            status: 200,
            foundUser
           } 
        }else{
            return {
                status: 500,
                desc: "The password is not correct"
            }
        }
    } else {
        return {
            status: 404,
            desc: "Email not found"
        }
    }
    
 }
 