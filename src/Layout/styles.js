import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => {
    const drawerWidth = 280

    return ({
        root: {
            display: 'flex'
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth
            }
        },
        drawerPaper: {
            width: drawerWidth,
            border: 'none'
        },
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 3,
            padding: theme.spacing(5),
            marginTop: 85,
            marginBottom: 60
        }
    })
})