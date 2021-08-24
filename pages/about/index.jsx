import {
  Grid,
  Box
} from '@material-ui/core'
import { useState } from 'react'
import TopBar from '../../src/Components/TopBar'
import Menu from '../../src/Components/Menu'
import AboutPage from '../../src/Components/AboutPage'

import { useStyles } from '../../src/Layout/styles'

const About = () => {
    const classes = useStyles()
    const [sideBarOpen, setSideBarOpen] = useState(false)
    const menuClick = () => setSideBarOpen(!sideBarOpen)
    
    return (
        <Box className={classes.root}>
            <TopBar menuClick={menuClick} />
            <Menu 
                sideBarOpen={sideBarOpen}
                setSideBarOpen={setSideBarOpen}
            />

            <Grid className={classes.content}>
                <AboutPage />
            </Grid>
        </Box>
    )
}

export default About