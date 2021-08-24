import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
    root: {
        marginBottom: -15
    },
    actions: {
        marginTop: 4,
        marginLeft: 14,
        opacity: 0.5,
        fontSize: 30,
        cursor: 'pointer'
    },
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
    loading: {
        marginTop: 7,
        marginLeft: 14,
        color: 'black',
        opacity: 0.5
    }
})