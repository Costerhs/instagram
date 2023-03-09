export const changeObjToForm = (obj) => {
    let formData = new FormData()
    Object.entries(obj).map(el => {
        formData.append(el[0], el[1])
    })
    return formData
}

export const setLocal = (name, value) => {
    localStorage.setItem(name, value)
}