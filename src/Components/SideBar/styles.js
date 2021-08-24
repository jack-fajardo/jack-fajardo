import { styled, makeStyles } from '@material-ui/core/styles'
import {
    ListItem,
    Typography
} from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    root: {
        border: 'none'
    },
    link: {
        textDecoration: 'none'
    }
}))

export const ActiveListItem = styled(ListItem)({
    background: '#53b2df',
    height: 40,
    borderRadius: 3,
    color: 'white',
    "&:hover": {
        backgroundColor: "#48acdb"
    }
})

export const MenuText = styled(Typography)({
    marginTop: 123,
    opacity: 0.5,
    letterSpacing: 2
})

export const InActiveListItem = styled(ListItem)({
    height: 40,
    radius: 2,
    borderRadius: 3,
    color: 'black',
})