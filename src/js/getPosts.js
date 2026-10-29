const API_URL = "https://api.mockendpoint.com/v1/ioe6ii7t"

export const getPosts = async () => {
    try {
        const res = await fetch(API_URL)

        if(!res.ok) throw new Error(`HTTP ${res.status}`)

        const data = await res.json()

        return data.posts ?? []
    } catch (err) {
        console.log(err)
        return []
    }
}