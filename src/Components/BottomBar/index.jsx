
import { AppBar, Box } from '@material-ui/core';
import { useStyles } from './styles'

const BottomBar = ({ text }) => {
    const classes = useStyles()

    return (
        <AppBar className={classes.bottomBar}>
            <Box className={classes.text}>
                {text}
            </Box>
        </AppBar>
    )
}

export default BottomBar