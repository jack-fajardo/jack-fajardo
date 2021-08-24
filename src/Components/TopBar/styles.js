import {
    Typography,
    makeStyles,
    withStyles
} from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    topBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: '#2c2c2e',
        boxShadow: "none"
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    }
}))

export const FirstText = withStyles({
    root: { fontWeight: 900 }
})(Typography)

export const SecondText = withStyles({
    root: {
        fontWeight: 900,
        color: '#c6c6c6'
    }
})(Typography)

export const ThirdText = withStyles({
    root: {
        fontWeight: 900,
        color: '#83d8f6'
    }
})(Typography)

