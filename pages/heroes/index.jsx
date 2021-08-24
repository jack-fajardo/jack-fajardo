import { useState } from 'react'
import {
  Grid,
  Box
} from '@material-ui/core'

import TopBar from '../../src/Components/TopBar'
import Header from '../../src/Components/Header'
import Content from '../../src/Components/Content'
import Menu from '../../src/Components/Menu'

import { useStyles } from '../../src/Layout/styles'
import {
  Constants,
  cardsData
} from '../../src/Constants/data'

const HeroPage = () => {
    const classes = useStyles()
    const [cards, setCards] = useState(cardsData)
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
                <Header 
                    loading={false} 
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
        </Box>
    )
}

export default HeroPage