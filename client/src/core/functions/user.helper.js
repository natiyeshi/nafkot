

export const deleteToken = () => {
    localStorage.removeItem("token")
}

export const isLogedIn = () => {
   const token = localStorage.getItem("token")
   if(token != null && typeof token == "string" && token.length > 10){
      return [true,token]
   } else{
      return [false,null]
   }
}

export const storeToken = (token) => {
   localStorage.setItem("token",token)
}
 