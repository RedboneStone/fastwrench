import add from "lodash/add"

export const a = (b) => {
    return b * b
}

export const addSafe = (a, b) => {
    return add(a, b)
}
let _ = {
    addSafe,
    a
}
export default _ 