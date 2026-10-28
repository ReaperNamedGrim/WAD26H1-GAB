const URL = "https://api.mockendpoint.com/v1/yhwbsk4s"

export const getPosts = async () => {
    const res = await fetch(URL)
        .then((posts) => posts.json())
        .catch((err) => console.error(err))

    return res
}

console.log(await getPosts())