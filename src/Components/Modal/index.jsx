import {
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button
} from '@material-ui/core'

const Modal = ({
    personType,
    modalOpen,
    handleModalClose,
    titleValue,
    titleOnChange,
    descriptionValue,
    descriptionOnChange,
    handleCancel,
    handleSave,
    actionLabel
}) => {
    return (
        <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            open={modalOpen}
            onClose={handleModalClose}
        >
            <DialogTitle id="form-dialog">{actionLabel} {personType}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please enter title and description:
                </DialogContentText>
                <TextField
                    id="title"
                    label="Title"
                    variant="outlined"
                    margin="dense"
                    autoComplete='off'
                    value={titleValue}
                    onChange={(e) => { titleOnChange(e.target.value) }}
                    fullWidth
                />
                <TextField
                    id="Description"
                    label="Description"
                    variant="outlined"
                    margin="dense"
                    autoComplete='off'
                    value={descriptionValue}
                    onChange={(e) => { descriptionOnChange(e.target.value) }}
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancel} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSave} color="primary">
                    {actionLabel}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Modal