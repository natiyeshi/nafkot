
/// edit description of single products
export const editDesc = (items) => {
    let desc = "";
    for (let item of items) {
        desc += item.amount + " " + item.name + ", "
    }
    desc = desc.slice(0, -2)
    return desc
}

export const checkString = (data) => {
    return data.trim() !== "" && data.length > 0
}