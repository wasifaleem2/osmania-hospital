import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';


const DefalultLayout = ({ children }) => {
    return (
        <div className='main-page-area'>
           <Header></Header>
           <div className='main-page-content'>
            {children}
           </div>
            <Footer></Footer>
        </div>
    );
};

export default DefalultLayout;