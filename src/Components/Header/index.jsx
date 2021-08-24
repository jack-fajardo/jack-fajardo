import { useState } from 'react'
import { Typography, Grid, CircularProgress } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import CachedSharpIcon from '@material-ui/icons/CachedSharp'
import { useStyles } from './styles'
import Create from '../Create'

const Header = ({
    headerName,
    loading,
    personType
}) => {
    const classes = useStyles()

    const [modalOpen, setModalOpen] = useState(false)
    const handleModalOpen = () => setModalOpen(true)
    const handleModalClose = () => setModalOpen(false)

    const createModal = () => {
        return (
            <Create
                modalOpen={modalOpen}
                handleModalClose={handleModalClose}
                personType={personType}
            />
        )
    }

    return (
        <Grid className={classes.root} container direction="row" item xs={12}>
            <Typography className={classes.title}>
                &nbsp;{headerName}&nbsp;&nbsp;
            </Typography>
            <AddIcon onClick={handleModalOpen} className={classes.actions} />&nbsp;
            {
                loading ? (
                    <CircularProgress className={classes.loading} size={23} />
                ) : (
                    <CachedSharpIcon onClick={() => { console.log('refreshed') }} className={classes.actions} />
                )
            }
            &nbsp;&nbsp;
            {createModal()}
        </Grid>
    )
}

export default Header