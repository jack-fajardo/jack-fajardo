import { useEffect, useState } from 'react'
import {
    Drawer,
    Hidden,
    Grid,
    Box
} from '@material-ui/core'

import SideBar from '../Components/SideBar'
import TopBar from '../Components/TopBar'
import Header from '../Components/Header'
import Content from '../Components/Content'
import BottomBar from '../Components/BottomBar'
import AboutPage from '../Components/AboutPage'

import { useStyles } from './styles'
import {
    buttonsData,
    Constants,
    footerText,
    PERSONS_API_URL
} from '../Constants/data'

import ContentContext from '../Contexts/ContentContext'
import { getPersons } from '../Utilities'

const Layout = () => {
    const classes = useStyles()

    const menuClick = () => setSideBarOpen(!sideBarOpen)
    const [sideBarOpen, setSideBarOpen] = useState(false)
    const [cards, setCards] = useState([])
    const [buttonItems, setButtonItems] = useState(buttonsData)
    const [loading, setLoading] = useState(true)

    const refreshCards = () => {
        getPersons(setCards, setLoading, PERSONS_API_URL)
    }

    useEffect(() => {
        refreshCards()
    }, [])

    return (
        <ContentContext.Provider value={{ refreshCards }} >
            <Router>
                <Box className={classes.root}>
                    <TopBar menuClick={menuClick} />

                    <Grid className={classes.drawer}>
                        <Hidden xsUp implementation="css">
                            <Drawer
                                variant="temporary"
                                open={sideBarOpen}
                                onClose={menuClick}
                                classes={{ paper: classes.drawerPaper }}
                            >
                                <SideBar
                                    buttonItems={buttonItems}
                                    setButtonItems={setButtonItems}
                                />
                            </Drawer>
                        </Hidden>
                        <Hidden xsDown implementation="css">
                            <Drawer
                                classes={{ paper: classes.drawerPaper }}
                                variant="permanent"
                                open
                            >
                                <SideBar
                                    buttonItems={buttonItems}
                                    setButtonItems={setButtonItems}
                                />
                            </Drawer>
                        </Hidden>
                    </Grid>

                    {/* cards are displayed in descending order */}
                    <Switch>
                        <Route exact path="/"><Redirect to={Constants.HERO.Link} /></Route>
                        <Route exact path={Constants.HERO.Link}>
                            <Grid className={classes.content}>
                                <Header
                                    loading={loading}
                                    headerName={Constants.HERO.Header}
                                    personType={Constants.HERO.PersonType}
                                />
                                {
                                    cards.sort((a, b) => (b.id - a.id)).map((props) => (
                                        props.personType === Constants.HERO.PersonType &&
                                        <Content
                                            key={props.id}
                                            id={props.id}
                                            title={props.title}
                                            description={props.description}
                                            personType={props.personType}
                                        />
                                    ))
                                }
                            </Grid>
                        </Route>
                        <Route exact path={Constants.VILLAIN.Link}>
                            <Grid className={classes.content}>
                                <Header
                                    loading={loading}
                                    headerName={Constants.VILLAIN.Header}
                                    personType={Constants.VILLAIN.PersonType}
                                />
                                {
                                    cards.sort((a, b) => (b.id - a.id)).map((props) => (
                                        props.personType === Constants.VILLAIN.PersonType &&
                                        <Content
                                            key={props.id}
                                            id={props.id}
                                            title={props.title}
                                            description={props.description}
                                            personType={props.personType}
                                        />
                                    ))
                                }
                            </Grid>
                        </Route>
                        <Route exact path={Constants.ABOUT.Link}>
                            <Grid className={classes.content}>
                                <AboutPage />
                            </Grid>
                        </Route>
                    </Switch>

                    <BottomBar text={footerText} />
                </Box>
            </Router>
        </ContentContext.Provider>
    );
}

export default Layout