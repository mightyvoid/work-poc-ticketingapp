import React, { Component } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import HomeView from '../modules/Home/view';
import LoginView from '../modules/Login/view/index';
import SignUpView from '../modules/SignUp/view';

class App extends Component {
    render() {
        return (
           <>
           <Router>
            <Routes>
                <Route path='/' element={<LoginView/>}></Route>
                <Route path='/signup' element={<SignUpView/>}></Route>
                <Route path='/home' element={<HomeView/>}></Route>
            </Routes>
            </Router>
            
           </>
        );
    }
}

export default App;