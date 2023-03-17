import React from 'react';
import NavBar from './NavBar';

const Layout = (props: any) => {
    const { children } = props;
    return (
        <div>
            <NavBar/>
            {children}
        </div>
    )
}

export default Layout;