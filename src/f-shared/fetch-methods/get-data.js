export async function getData(urlAPI, bodyData) {
    try {
        const response = await fetch(urlAPI, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyData)
        })
        if (!response.ok) {
            const errorText = await response.json();
            throw new Error(errorText.error || `${response.status}`)
        }
        return response.json();
    } catch (error) {
        throw new Error(error.massage)
    }
}


export async function postData(urlAPI, token , bodyData) {
    try {
        const response = await fetch(urlAPI, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(bodyData)
        })
        if (!response.ok) {
            const errorText = await response.json();
            throw new Error(errorText.error || `${response.status}`)
        }
        return response.json();
    } catch (error) {
        throw new Error(error.massage)
    }
}
