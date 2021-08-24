import {
    useState,
    useEffect
} from 'react'

import Modal from '../Modal'

const Edit = ({
    modalOpen,
    handleModalClose,
    id,
    title,
    description,
    personType
}) => {

    const [updatedTitle, setUpdatedTitle] = useState('')
    const [updatedDescription, setUpdatedDescription] = useState('')

    useEffect(() => {
        setUpdatedTitle(title)
        setUpdatedDescription(description)
    }, [title, description])

    const closeAndReset = () => {
        handleModalClose()
        setUpdatedTitle(title)
        setUpdatedDescription(description)
    }

    const handleUpdate = async () => {
        console.log('updated')

        closeAndReset()
    }

    return (
        <Modal
            personType={personType}
            modalOpen={modalOpen}
            handleModalClose={handleModalClose}
            titleValue={updatedTitle}
            titleOnChange={setUpdatedTitle}
            descriptionValue={updatedDescription}
            descriptionOnChange={setUpdatedDescription}
            handleCancel={closeAndReset}
            handleSave={handleUpdate}
            actionLabel="Update"
        />
    );
}

export default Edit