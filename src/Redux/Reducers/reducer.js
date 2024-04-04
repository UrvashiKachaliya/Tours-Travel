const INIT_STAT={
    carts:[]
}

export const cartreducer=(state=INIT_STAT,action)=>{
    switch(action.type){
    case "ADD_CART":
        return{
            ...state,
            carts: [...state.carts,action.payload]
        }
        case "RMV_CART":
            const data = state.carts.filter(id => id.PackageId !== action.payload);
            return{
                ...state,
                carts: data
            }
        default:
            return state
    }
  

}