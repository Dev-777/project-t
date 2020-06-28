import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Test} from '../test/Test';
import {Header} from '../components/root/header/Header';
import '../assets/css/app.css';


export default function App(){

  return (
    <>
      <Router>
        <Header/>


        {/*<Test/>*/}


      </Router>
    </>);

}