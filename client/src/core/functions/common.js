
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

// clear data from localstorage
export const removeData = () =>{ 
    localStorage.removeItem("nafkot-cart-items")
}

// save data to cart
export const storeCart  = (cart) => {
    if(cart == null || cart == undefined){
        removeData()
    } else{
        let string  = JSON.stringify(cart)
        localStorage.setItem("nafkot-cart-items",string)
    }
}

// calculate cart total
export const calculateTotal = (cartData) => {
    try{
        let total = 0;
        cartData.forEach(element => {
            total += Number(element.data.price) * Number(element.amount)
        })
        return [true,total];
    }catch(e){
        removeData()
        console.log("something goe ... ",e)
        return 0
    }
}

// save data to cart
export const getCartFromStore  = () => {
    try{
        let string = localStorage.getItem("nafkot-cart-items")
        let cartItems = JSON.parse(string)
        let [bool,total] = calculateTotal(cartItems)
        if(bool) {
            return {cartItems , total}
        } else{
            return {cartItems : [],total : 0}
        }
    }catch(e){
        removeData(null)
        return { cartItems :[], total: 0}
    }
}

export const standardNumber = (number) => {
    const num = parseFloat(number)
    const intValue = parseInt(num)
    const dec = num - intValue
    let strValue = intValue.toString()
    let ans = ""
    let ptr = strValue.length - 1
    for(let i = strValue.length - 1; i > -1; i--){
        if(i + 3 == ptr){
            ptr = i
            ans += ","
        }
        ans += strValue[i]
    }
    ans = ans.split('').reverse().join('')
    return number +"-" +ans 
    // + dec.toString() 
}

