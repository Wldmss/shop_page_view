import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Paper, Button, Menu, MenuItem, Divider, FormHelperText, FormControl, Select, InputLabel, Radio, RadioGroup, FormControlLabel, ListItemIcon, Typography, Switch, ButtonGroup } from '@material-ui/core';
import "../../css/homepage.css";
import HeaderComponent from "../header/header"
import MenuComponent from '../menu/menu';
import SideComponent from '../sidebar/sidebar';
import FooterComponent from '../footer/footer';
import PageMainComponent from '../body/shop/pageMain';


//main form
function MainComponent(props){

    useEffect(() => {

    },[]);

    return (
        <div style={{margin:'0 10% 30px 10%'}}>
            <HeaderComponent />
            <MenuComponent />
            <SideComponent />

            <div>
                <PageMainComponent />
            </div>

            <FooterComponent />
        </div>
    );
}

export default MainComponent;