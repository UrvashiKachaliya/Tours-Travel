export const ADD =(item )=>{
    return{
        type:"ADD_CART",
        payload:item

    }

}

// delete
export const DEL =(id)=>{
    return{
        type:"RMV_CART",
        payload:id

    }

}