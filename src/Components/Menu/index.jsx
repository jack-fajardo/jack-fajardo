import { useState } from 'react'
import {
  Drawer,
  Hidden,
  Grid
} from '@material-ui/core'
import SideBar from '../SideBar'
import { useStyles } from '../../Layout/styles'
import { buttonsData } from '../../Constants/data'

const Menu = ({sideBarOpen, setSideBarOpen}) => {
    const classes = useStyles()
    const [buttonItems, setButtonItems] = useState(buttonsData)
    const menuClick = () => setSideBarOpen(!sideBarOpen)
    
    return (
        <Grid className={classes.drawer}>
            <Hidden xsUp implementation="css">
                <Drawer
                    variant="temporary"
                    open={sideBarOpen}
                    onClose={menuClick}
                    classes={{paper: classes.drawerPaper}}
                >
                    <SideBar 
                        buttonItems={buttonItems} 
                        setButtonItems={setButtonItems}
                    />
                </Drawer>
            </Hidden>

            <Hidden xsDown implementation="css">
                <Drawer
                    open
                    classes={{paper: classes.drawerPaper}}
                    variant="permanent"
                >
                    <SideBar 
                        buttonItems={buttonItems} 
                        setButtonItems={setButtonItems}
                    />
                </Drawer>
            </Hidden>
        </Grid>
    )
}

export default Menu
