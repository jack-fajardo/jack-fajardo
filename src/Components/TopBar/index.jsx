
import {
    AppBar,
    IconButton,
    Toolbar
} from '@material-ui/core';
import Image from 'next/image'

import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../../public/logo.png';

import { 
    useStyles,
    FirstText,
    SecondText,
    ThirdText
}
from './styles'

const TopBar = ({
    menuClick
}) => {
    const classes = useStyles()

    return (
        <AppBar className={classes.topBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={menuClick}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Image 
                    src={logo} 
                    alt='logo' 
                    width="50" 
                    height="50"
                />&nbsp;
                <FirstText variant="h6" noWrap>
                    TOUR
                </FirstText>
                <SecondText variant="h6" noWrap>
                    OF
                </SecondText>
                <ThirdText variant="h6" noWrap>
                    HEROES
                </ThirdText>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar