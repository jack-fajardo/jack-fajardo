import { useState } from "react";
import {
    Card,
    CardActions,
    CardContent,
    Button,
    ButtonGroup,
    Typography,
    Grid
} from '@material-ui/core'

import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { useStyles } from './styles'
import Edit from '../Edit'

const Content = ({
    id,
    title,
    description,
    personType
}) => {
    const classes = useStyles()

    const [modalOpen, setModalOpen] = useState(false)
    const handleModalOpen = () => setModalOpen(true)
    const handleModalClose = () => setModalOpen(false)

    const handleDelete = async () => {
        console.log('deleted')
    }

    const editModal = () => {
        return (
            <Edit
                modalOpen={modalOpen}
                handleModalClose={handleModalClose}
                id={id}
                title={title}
                description={description}
                personType={personType}
            />
        )
    }

    return (
        <Grid key={id} className={classes.spacing} item xs={12}>
            <Card className={classes.root} variant="outlined">
                <CardContent className={classes.cardContent}>
                    <Typography noWrap variant="h4">
                        {title}
                    </Typography>
                    <Typography noWrap className={classes.description} variant="h5" color="textSecondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions}>
                    <ButtonGroup fullWidth className={classes.ButtonGroup}>
                        <Button
                            startIcon={<DeleteIcon />}
                            className={classes.buttonDelete}
                            size="large"
                            onClick={handleDelete}
                        >
                            Delete
                        </Button>
                        <Button
                            startIcon={<EditIcon />}
                            className={classes.buttonEdit}
                            size="large"
                            onClick={handleModalOpen}
                        >
                            Edit
                        </Button>
                    </ButtonGroup>
                </CardActions>
            </Card>
            {editModal()}
        </Grid>
    );
}

export default Content