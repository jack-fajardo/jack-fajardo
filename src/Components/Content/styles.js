import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    root: {
        borderRadius: 0,
        boxShadow: "0 3px 3px -3px rgba(0,0,0,0.3)"
    },
    cardContent: {
        backgroundColor: "#fafafa",
        paddingTop: 35,
        paddingLeft: 30,
        paddingBottom: 35
    },
    description: {
        paddingTop: 10
    },
    actions: {
        position: "inherit",
    },
    ButtonGroup: {
        opacity: 0.6
    },
    buttonDelete: {
        borderRadius: 0,
        height: 40,
        textTransform: 'none',
        fontSize: 19
    },
    buttonEdit: {
        borderRadius: 0,
        height: 40,
        textTransform: 'none',
        fontSize: 19
    },
    spacing: {
        marginTop: 40
    }
})