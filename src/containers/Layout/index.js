import React from 'react';
import Footer from '../../components/footer';
import NavBar from '../../components/navBar/index';
export default function Layout({children}){
    return(
    <div>
            <NavBar />
            {children}
            <Footer />
    </div>
    
    )
}