import AuthContext from '../context/AuthContext';
import NavBar from './NavBar';
import { useContext } from 'react';
const Layout = (props: any) => {
    const { children } = props;
    const {user} = useContext(AuthContext)
    return (
        <div className='main-margin-page'>
            {user.id && (
                <NavBar/>
            )}
            
            {children}
        </div>
    )
}

export default Layout;