import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => {
    return ({
        title: {
            borderLeft: "18px solid #53b2df",
            borderBottom: "2px solid #53b2df",
            fontSize: 35,
            fontWeight: 'bold',
            color: '#555555',
            display: 'inline',
            lineHeight: 1.2,
            textTransform: 'capitalize'
        },
        box: {
            marginTop: 35,
            padding: theme.spacing(3),
            backgroundColor: "#fafafa",
            boxShadow: "0 2px 3px -3px rgba(0,0,0,0.3)",
            marginLeft: 0
        },
        paragraph: {
            opacity: 0.6,
            marginTop: 10
        }
    })
})