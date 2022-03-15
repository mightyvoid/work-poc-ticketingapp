import React, { Component } from 'react';
import BottomBar from '../../../commons/footer/footer';
import Navbar from '../../../commons/navbar/Navbar';

class HomeView extends Component {
    render() {
        return (
         <>
         <Navbar/>
         <BottomBar/>
         </>
        );
    }
}

export default HomeView;