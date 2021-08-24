import { useState } from 'react'
import Modal from '../Modal'

const Create = ({
    modalOpen,
    handleModalClose,
    personType
}) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const closeAndClear = () => {
        handleModalClose()
        setTitle('')
        setDescription('')
    }

    const handleSave = async () => {
        console.log('saved!')

        closeAndClear()
    }

    return (
        <Modal
            personType={personType}
            modalOpen={modalOpen}
            handleModalClose={handleModalClose}
            titleValue={title}
            titleOnChange={setTitle}
            descriptionValue={description}
            descriptionOnChange={setDescription}
            handleCancel={closeAndClear}
            handleSave={handleSave}
            actionLabel="Create"
        />
    )
}

export default Create