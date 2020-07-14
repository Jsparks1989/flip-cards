export const flipped = () => {
    return {
        type: "FLIPPED",
        payload: true
    }
}


export const notFlipped = () => {
    return {
        type: "NOT_FLIPPED",
        payload: false
    }
}