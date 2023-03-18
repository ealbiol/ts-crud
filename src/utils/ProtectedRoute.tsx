import { useContext } from "react";
import {Navigate} from "react-router-dom"
import AuthContext from "../context/AuthContext";
/**
 * Protected Routes Config. Children are posts and users pages.
 * @param children node
 * @returns children
 */
export const ProtectedRoute = ({
    children,
  } : {
    children: JSX.Element
  }) => {
    const {user} = useContext(AuthContext);
    if (!user.id) {
      return  <Navigate to="/" replace />;
    }
  
    return children;
};