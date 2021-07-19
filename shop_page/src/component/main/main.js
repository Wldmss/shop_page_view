import React, { useEffect, useState, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
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
    const [nowWidth,setNowWidth] = useState(window.innerWidth);
    const isPc = useMediaQuery({
        query : "(min-width:1024px)"
    });
    const isTablet = useMediaQuery({
        query : "(min-width:768px) and (max-width:1023px)"
    });
    const isMobile = useMediaQuery({
        query : "(max-width:767px)"
    });
    const [device,setDevice] = useState(isPc ? 0 : isTablet ? 1 : 2);   //pc:0 , tablet:1, mobile:2


    const resizeWidth = useCallback( e => {
        setNowWidth(window.innerWidth);
    },[]);

    useEffect(() => {
        window.addEventListener('resize',resizeWidth);
        return () => window.removeEventListener('resize',resizeWidth);
    },[resizeWidth]);

    useEffect(() => {

    },[])

    return (
        <div style={{margin:'0 10% 30px 10%'}}>
            <HeaderComponent maxWidth={nowWidth} device={device}/>
            <MenuComponent maxWidth={nowWidth} device={device}/>
            <SideComponent maxWidth={nowWidth} device={device}/>

            <div>
                <PageMainComponent maxWidth={nowWidth} device={device} />
            </div>

            <FooterComponent maxWidth={nowWidth} device={device} />
        </div>
    );
}

export default MainComponent;