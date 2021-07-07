import React, { useEffect, useState, useRef } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Fab, Paper, Button, Menu, MenuItem, Divider, FormHelperText, FormControl, Select, InputLabel, Radio, RadioGroup, FormControlLabel, ListItemIcon, Typography, Switch, ButtonGroup, IconButton } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
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

/**go to top*/
function HeaderComponent(props){
    const classes = useStyles();
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (e) => {
        const anchor = (e.target.ownerDocument || document).querySelector('#header-bar');
    
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

/**main */
function HeaderMain(props){
    const classes = useStyles();
    const [logIn,setLogIn] = useState(true);
    const id_num = useRef();
    const btnTitle = [
        {
            id:1,
            name:"장바구니",
            login: false,
        },
        {
            id:2,
            name:"좋아요",
            login: !logIn,
        },
        {
            id:3,
            name:"로그인",
            login: logIn,
        },
        {
            id:4,
            name:"회원가입",
            login: logIn,
        },
        {
            id:5,
            name:"로그아웃",
            login: !logIn,
        },
        {
            id:6,
            name:"마이페이지",
            login: !logIn,
        },
    ];

    function ShowIcon({btnVal}) {
        const {id,name,login} = btnVal;
        return(
            <>
            { id === 1 ?
                <LocalMallOutlinedIcon style={{fontSize:30, display: login ? "none" : ''}}/>
            : id == 2 &&
                <FavoriteBorderIcon style={{fontSize:30}}/>
            }
            </>
        );
    }

    /**header button*/
    function AccountButton({btnVal}) {
        const {id,name,login} = btnVal;
        const [accountMenu,setAccountMenu] = useState({
            account_id : null,
            open : false,
        });

        const handleAccountClick = e => {
            setAccountMenu({...accountMenu, open: true, account_id: e.currentTarget});
        }

        const handleAccountClose = () => {
            setAccountMenu({...accountMenu, open: false});
        }

        return(
            <>
            {id === 6 ? 
                <div className="account_img">
                    <Button
                        aria-owns={accountMenu.open ? 'simple-menu' : null}
                        aria-haspopup="true"
                        // className="button_white"
                        className={window.innerWidth > 1200 ? "button_white" : "button_white_small"}
                        disableRipple={true}
                        onClick={handleAccountClick}
                        onMouseOver={handleAccountClick}
                    >
                        <AccountCircleIcon style={{fontSize:30}} onClick={() => clickAccountButton(id)} />
                    </Button>
                    {/* <Menu
                        id="simple-menu"
                        anchorEl={accountMenu.account_id}
                        open={accountMenu.open}
                        onClose={handleAccountClose}
                    >
                        {btnTitle.map( btn => (
                            !btn.login &&
                            <MenuItem onClick={handleAccountClose} key={btn.id}>{btn.name}</MenuItem>
                        ))}
                    </Menu> */}
                </div>
            :
                <div className={window.innerWidth > 1200 ? "button_space" : "account_img"}>
                    <button 
                        // className="button_white"
                        className={window.innerWidth > 1200 ? "button_white" : "button_white_small"} 
                        style={{display:window.innerWidth > 1200 && !login ? '' : !login && id <= 2 ? '' : 'none'}} 
                        key={id} 
                        onClick={() => clickAccountButton(id)}
                    >
                        {window.innerWidth > 1200 ? name : <ShowIcon btnVal={btnVal} />}
                    </button>
                </div>
            }
            </>
        );
    }

    /**account button click event */
    function clickAccountButton(id_val){
        let info = id_val;
        console.log(info);
    }

    useEffect(() => {
        id_num.current = btnTitle.length;
        console.log(window.innerWidth + " :: " + window.outerWidth);
        //window.innerWidth = 500이 최소 in web
    },[]);

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

                    <div className="account_button_box">
                        {btnTitle.map( btn => (
                            <AccountButton key={btn.id} btnVal={btn} onClick={() => clickAccountButton(btn.id)}/>
                        ))}
                    </div>
                </Toolbar>
            </AppBar>
            <Divider />
            <div style={{background:'yellow', width: '100px', height:'200px', float:'right'}}>

            </div>

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

export default HeaderMain;