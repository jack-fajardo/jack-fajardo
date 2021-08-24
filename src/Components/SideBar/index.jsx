import Link from 'next/link'
import {
    List,
    ListItemText,
    Container
} from '@material-ui/core'

import {
    ActiveListItem,
    InActiveListItem,
    MenuText,
    useStyles
} from './styles'

const SideBar = ({
    buttonItems,
    setButtonItems
}) => {
    const classes = useStyles()

    const handleSetActive = (id, name, location) => {
        const active = {
            id: id,
            name: name,
            active: true,
            location: location
        }

        const newButtonItems = buttonItems.map(
            (value) => (value.id === id ? active : {
                id: value.id,
                name: value.name,
                active: false,
                location: value.location
            })
        )

        setButtonItems(newButtonItems)
    }

    const ActiveButton = (props) => {
        const { id, name, location } = props
        return (
            <Link className={classes.link} key={id} href={location}>
                <ActiveListItem onClick={() => handleSetActive(id, name, location)} button key={id}>
                    <ListItemText primary={name} />
                </ActiveListItem>
            </Link>
        )
    }

    const InActiveButton = (props) => {
        const { id, name, location } = props
        return (
            <Link className={classes.link} key={id} href={location}>
                <InActiveListItem onClick={() => handleSetActive(id, name, location)} button key={id}>
                    <ListItemText primary={name} />
                </InActiveListItem>
            </Link>
        )
    }

    return (
        <Container className={classes.root} maxWidth="xs">
            <MenuText
                variant="button"
                display="block"
                gutterBottom
            >
                MENU
            </MenuText>
            <List>
                {buttonItems.map((props) => (
                    props.active ? ActiveButton(props) : InActiveButton(props)
                ))}
            </List>
        </Container>
    )
}

export default SideBar
