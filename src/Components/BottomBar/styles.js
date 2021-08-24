import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    bottomBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: '#2c2c2e',
        boxShadow: "none",
        top: 'auto',
        bottom: 0,
        height: 50,
        textAlign: 'center'
    },
    text: {
        paddingTop: 15
    }
}))