import React, { useEffect, useState } from 'react';
import { Paper, Button, Menu, MenuItem, Divider, FormHelperText, FormControl, Select, InputLabel, Radio, RadioGroup, FormControlLabel, ListItemIcon, Typography, Switch, ButtonGroup } from '@material-ui/core';
import "../../../css/homepage.css";
import HeaderComponent from '../../header/header';
import MenuComponent from '../../menu/menu';
import SideComponent from '../../sidebar/sidebar';
import FooterComponent from '../../footer/footer';

//storeMain form
function StoreMainComponent(props){

    useEffect(() => {

    },[]);

    return (
        <>
            <p>StoreMainComponent</p>
            <HeaderComponent />
            <MenuComponent />
            <SideComponent />

            <div>
                
            </div>

            <FooterComponent />
        </>
    );
}

export default StoreMainComponent;