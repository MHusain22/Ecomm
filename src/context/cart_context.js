import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer.js";

const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("MyCart");
    if( localCartData == []){
        return [];
    }
    else{
        return JSON.parse(localCartData);
    }
}

const initialState = {
    cart: getLocalCartData(),
    name: "",
    total_item: "",
    total_price:""
};

const CartProvider = ({children}) => {//always add children

    const [state,dispatch] = useReducer(reducer,initialState);

    //add to Cart
    const addToCart = (id,name,price,Image) => {
        dispatch({type:"ADD_TO_CART", payload:{id,name,price,Image}})
    };
    //remove item
    const removeItem = (id) => {
        dispatch({type:"REMOVE_ITEM", payload:id });
    };
    //to add data in local storage
    useEffect(() => {   //(key,value) key is name of local storage and value is in array form in this cas4e
        dispatch({type:"CART_TOTAL_ITEM"});
        dispatch({type:"CART_TOTAL_PRICE"});
        localStorage.setItem("MyCart",JSON.stringify(state.cart));
    }, [state.cart]);

    //to clear cart
    const clearCart = () => {
        dispatch({type:"CLEAR_CART"});
    }

    //decrement
    const setDecrease = (id) => {
        dispatch({type:"SET_DECREMENT", payload: id});
    }
    //increment
    const setIncrease = (id) => {
        dispatch({type:"SET_INCREMENT", payload: id});
    }


    return <CartContext.Provider value={{...state,addToCart,setDecrease,setIncrease,removeItem,clearCart}}>
        {children}
        </CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext);
};

export { CartProvider,useCartContext };