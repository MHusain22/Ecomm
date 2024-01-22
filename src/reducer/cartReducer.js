import React from 'react'

const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        let {id,name,price,Image} = action.payload;
        // console.log(price);
        let cartProduct;

        //tackle the existing
        let existingProduct = state.cart.find((currItem) => currItem.id==id)
        if(existingProduct){
            let updatedProduct = state.cart.map((currItem) => {
                if(currItem.id == id){
                    let newAmount = currItem.quantity + 1;
                    return {...currItem,quantity: newAmount};
                }
                else{
                    return currItem;
                }
            });
            return {
                ...state,
                cart: updatedProduct,
            };
        }else{

        cartProduct = {
            id: id,
            name: name,
            price: price,
            Image: Image
        };
        return {
            ...state,
            cart: [...state.cart, cartProduct],
        };
        }
    }

    if(action.type === "REMOVE_ITEM"){
       
        let updatedCart = state.cart.filter((item) =>item.id != action.payload);
        return {
            ...state,
            cart: updatedCart,
        };
    }

    if(action.type === "CLEAR_CART"){
        return {
            ...state,
            cart: [],
        };
    }


    if(action.type === "SET_INCREMENT"){
        let updatedProduct = state.cart.map((item) => {
            if(item.id === action.payload){
                return{...item, quantity: item.quantity + 1};
            }
            return item;
        });
        return {...state,cart:updatedProduct};
    }

    if(action.type === "SET_DECREMENT"){
        let updatedProduct = state.cart.map((item) => {
            if(item.id === action.payload){
                return{...item, quantity: item.quantity - 1};
            }
            return item;
        });
        return {...state,cart:updatedProduct};
    }

    if(action.type === "CART_TOTAL_ITEM"){
        let updatedItemVal = state.cart.reduce((initialValue,currItem) => {
            let {quantity} = currItem;

            initialValue = initialValue + quantity;
            return initialValue;
        }, 0);
        return{
            ...state,
            total_item: updatedItemVal
        }
    }

    if(action.type === "CART_TOTAL_PRICE"){
        let total_price = state.cart.reduce((initialValue,currItem) => {
            let {price,quantity} = currItem;

            initialValue = initialValue + price*quantity;
            return initialValue;
        },0);
        return{
            ...state,
            total_price: total_price
        }
    }

    return state;
};

export default cartReducer;