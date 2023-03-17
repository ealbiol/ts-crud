import React, { useState, useEffect, ReactNode } from 'react';
import { navBarItems, entities } from "../db/data";


export default function NavBar() {
    const [navBarSelected, setNavBarSelected] = useState<string>("Blog");

    const handleEntity = (e: any) => {
        const newClickedEntity = e.target.innerHTML;
        setNavBarSelected(newClickedEntity)

    }

    return (
        <div style={{ border: "1px solid black", justifyContent: "space-between" }} className="flex items-center my-10px mx-15%">
            <div style={{ border: "2px solid green" }} className='font-bold text-lg'>EDUARD ALBIOL CODE</div>
            <div style={{ border: "3px solid orange", minWidth: "60%", justifyContent: "space-between" }}
                className='flex items-center cursor-pointer text-md'>
                <div>
                    {entities?.map((item, id) => (
                        <React.Fragment key={id}>
                            <span
                                style={{ border: "1px solid blue" }}
                                className="px-10px"
                                onClick={handleEntity}>{item.entity}</span>
                        </React.Fragment>
                    ))}
                </div>
                <div style={{ border: "2px solid red" }} className="flex justify-center space-x-14 ">
                    {
                        navBarItems.map((item) => {
                            if (item.name === navBarSelected) {
                                return item.methods.map((method, id) => {
                                   return(
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
            </div>
        </div>
    )
}
