import axios from 'axios'

export const Api = {
    PostMethod: (url, body) => {
        const response =
            axios
                .post(url, body)
                .then(res => {
                    return res
                })
                .catch(error => {
                    return error
                })

        return response
    },
    GetMethod: (url, body) => {
        const response =
            axios
                .get(url, body)
                .then(res => {
                    return res
                })
                .catch(error => {
                    return error
                })

        return response
    },
    PutMethod: (url, body) => {
        const response =
            axios
                .put(url, body)
                .then(res => {
                    return res
                })
                .catch(error => {
                    return error
                })

        return response
    },
    DeleteMethod: (url, body) => {
        const response =
            axios
                .delete(url, { data: body })
                .then(res => {
                    return res
                })
                .catch(error => {
                    return error
                })

        return response
    },
}

export const getPersons = async (setCards, setLoading, url) => {
    const response = await Api.GetMethod(url, {})

    if (
        response.data &&
        response.status === 200 &&
        response.statusText === "OK"
    ) {
        setCards(response.data)
        setLoading(false)
    }
}
