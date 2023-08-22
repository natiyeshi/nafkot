
/// edit description of single products
export const editDesc = (items) => {
    let desc = "";
    for (let item of items) {
        desc += item.amount + " " + item.name + ", "
    }
    desc = desc.slice(0, -2)
    return desc
}

// check empty
export const checkString = (data,num = 1) => {
    return data.trim() !== "" && data.length >= num
}

// authenticate object and return status and message
export const validateObject = (data,strLen = 1,num = 1) => { 

    for(let ind of Object.keys(data)){
        if(typeof data[ind] === "string"){
            if(!checkString(data[ind],strLen)){
                return [false,"invalid "+ind]
            }
        } else if(typeof data[ind] == "number") {
            if(data[ind] < num){
                return [false,"invalid "+ind]
            }
        }
    }

    return [true]
}