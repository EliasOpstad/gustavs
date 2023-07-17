//React router

import React from 'react';
import {
    Route,
    Routes,
} from 'react-router-dom';
import HomePage from '../pages/Home';
import Page404 from '../pages/Page404';

import { PATH_ABOUTGUSTAV, PATH_HOME, PATH_ORDERTABLE, PATH_PAGE404, PATH_RESTAURANT } from './Routes';
import { Restaurant } from '../pages/Restaurant';
import { AboutGustav } from '../pages/AboutGustav';
import { OrderTable } from '../pages/OrderTable';



const Router = () =>(
    <Routes>
        <Route path={`${PATH_HOME}`} element={<HomePage/>}/>
        <Route path={`${PATH_ABOUTGUSTAV}`} element={<AboutGustav/>}/>
        <Route path={`${PATH_ORDERTABLE}`} element ={<OrderTable/>}/>
        <Route path={`${PATH_RESTAURANT}`} element ={<Restaurant/>}/>
        <Route path={`${PATH_PAGE404}`} element ={<Page404/>}/>
    </Routes>
)
export default Router;