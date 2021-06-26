import React, { useEffect, useState } from 'react';
import { Paper, Button, Menu, MenuItem, Divider, FormHelperText, FormControl, Select, InputLabel, Radio, RadioGroup, FormControlLabel, ListItemIcon, Typography, Switch, ButtonGroup } from '@material-ui/core';
import "../../../css/homepage.css";
import AccountComponent from '../user/account';
import LoginComponent from '../user/login';
import SignInComponent from '../user/signin';
import ShoppingCartComponent from '../user/shoppingCart';
import LikeComponent from '../user/like';
import HeaderComponent from '../../header/header';
import MenuComponent from '../../menu/menu';
import SideComponent from '../../sidebar/sidebar';
import FooterComponent from '../../footer/footer';

//MyPage form
function MyPageComponent(props){

    useEffect(() => {

    },[]);

    return (
        <>
            <p>MyPageComponent</p>
            <HeaderComponent />
            <MenuComponent />
            <SideComponent />

            <div>
                <AccountComponent />
                <LoginComponent />
                <SignInComponent />
                <ShoppingCartComponent />
                <LikeComponent />
            </div>

            <FooterComponent />
            
        </>
    );
}

export default MyPageComponent;