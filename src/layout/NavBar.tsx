import React, { useState, useEffect, ReactNode } from 'react';
import { navBarItems, entities } from "../db/data";


export default function NavBar() {
    const [navBarSelected, setNavBarSelected] = useState<string>("Blog");

    const handleEntity = (e: any) => {
        const newClickedEntity = e.target.innerHTML;
        setNavBarSelected(newClickedEntity)

    }

    return (
        <div  className="flex items-center my-20px mx-15% justify-between">
            <div className='font-bold text-lg'>EDUARD ALBIOL CODE.</div>
            <div className='flex items-center cursor-pointer text-md min-w-60% justify-between'>

                <div className="flex justify-center space-x-14 ">
                    {
                        navBarItems.map((item) => {
                            if (item.name === navBarSelected) {
                                return item.methods.map((method, id) => {
                                    return (
                                        <React.Fragment key={id}>
                                            <span className='text-sm cursor-pointer'>
                                                {method} {item.label || item.name}
                                            </span>
                                        </React.Fragment>
                                    )
                                })
                            }
                        }
                        )
                    }
                </div>
                <div className="flex">
                    {entities?.map((item, id) => (
                        <span className="button-black flex justify-center items-center" key={id}>
                            <span
                                onClick={handleEntity}>
                                {item.entity}
                            </span>
                            <span className="text-md pl-2">{item.emoji}</span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
