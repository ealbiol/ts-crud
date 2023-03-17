import React from 'react';
import NavBar from './NavBar';

const Layout = (props: any) => {
    const { children } = props;
    return (
        <div style={{ backgroundColor: "salmon" }}>
            <NavBar/>
            {children}
        </div>
    )
}

export default Layout;