import React, { useEffect, useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Fab, Paper, Button, Menu, MenuItem, Divider, FormHelperText, FormControl, Select, InputLabel, Radio, RadioGroup, FormControlLabel, ListItemIcon, Typography, Switch, ButtonGroup, IconButton } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Zoom from '@material-ui/core/Zoom';
import InputBase from '@material-ui/core/InputBase';
import "../../css/homepage.css";

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    flex: {
        display: 'flex',
        flexGrow: 1,
    },
    appBar: {
      background: 'white',
      height: '40px',
      width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    space: {
        marginTop: theme.spacing(-3),
        marginLeft: theme.spacing(-2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.03),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.05),
        },
        margin: '5px 0 0 0',
        // width: '17ch !important',
        height: '75%',
        float: 'right',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
        color: 'black',
    },
    searchIcon: {
        padding: theme.spacing(0, 1),
        marginTop: '2px',
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        // display: 'flex',
        // alignItems: 'center',
        justifyContent: 'center',
        color: 'black'
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(3)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        fontSize: '0.7em',
        [theme.breakpoints.up('sm')]: {
            width: '17ch !important',
            // '&:focus': {
            // width: '20ch !important',
            // },
        },
    },
}));

//header form
function HeaderComponent(props){
    const { children, window } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#header-bar');
    
        if (anchor) {
          anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };
    

    useEffect(() => {

    },[]);

    return (
        <>
            <Zoom in={trigger}>
                <div onClick={handleClick} role="presentation" className={classes.root}>
                    {children}
                </div>
            </Zoom>

        </>
    );
}

HeaderComponent.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default function BackToTop(props){
    const classes = useStyles();

    return (
        <>
        <div>
            <AppBar
                position="static"
                className={classes.appBar}
                elevation={0}
            >
                <Toolbar id="header-bar" className="toolbar">
                    {/* <IconButton edge="start">
                        <MenuIcon />
                    </IconButton> */}

                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder=""
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>

                    <div className="float_right">
                        <div className="button_space">
                            <Typography className="gray account_size typo_space" noWrap>
                                장바구니
                            </Typography>
                        </div>
                        <div className="button_space">
                            <Typography className="gray account_size typo_space" noWrap>
                                로그인
                            </Typography>
                        </div>
                        <div className="button_space">
                            <Typography className="gray account_size typo_space" noWrap>
                                회원가입
                            </Typography>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <Divider />
            <div>

            </div>

            <HeaderComponent {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </HeaderComponent>
        </div>
        </>
    );
}