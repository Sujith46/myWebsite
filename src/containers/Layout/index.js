import React from 'react';
import NavBar from '../../components/navBar/index';
export default function Layout({children}){
    return(
    <div>
            <NavBar />
            {children}
    </div>
    
    )
}