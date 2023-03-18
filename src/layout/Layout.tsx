import React from 'react';
import NavBar from './NavBar';

const Layout = (props: any) => {
    const { children } = props;
    return (
        <div className='my-20px mx-15%'>
            <NavBar/>
            {children}
        </div>
    )
}

export default Layout;