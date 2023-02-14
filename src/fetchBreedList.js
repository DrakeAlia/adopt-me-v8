const fetchBreedList = async ({ queryKey }) => {
    const animal = queryKey[1]

    // if no animal return an empty array, do need to go to the api for that
    if (!animal) return []

    const apiRes = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`)

    if (!apiRes.ok) {
        throw new Error(`breeds/${animal} fetch not ok`)
    }

    return await apiRes.json()
}

export default fetchBreedList;