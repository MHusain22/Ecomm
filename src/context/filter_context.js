import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/filterReducer.js";
import { ProductData } from "../components/ProductData.js";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    products: [],
    sorting_value: "lowest",
    filters: {
        text: "",
        type:"all",
    }
};

export const FilterContextProvider = ({children}) => {

    const [state,dispatch] = useReducer(reducer,initialState);

    //sorting function
    const sorting = (event) => {
        //passing selected option to reducer
        let userValue = event.target.value;
        dispatch({ type: "GET_SORT_VALUE", payload: userValue });
    };
    //to sort the product
    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" });
        dispatch({ type: "SORTING_PRODUCTS" });
    },[ProductData,state.sorting_value,state.filters]);


    //search
    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        dispatch({ type: "UPDATE_FILTER_VALUE",payload:{name,value} })
    }

    return( <FilterContext.Provider value={{ ...state,sorting,updateFilterValue }}>
        {children}
    </FilterContext.Provider>
    );
}

export const useFilterContext = () => {
    return useContext(FilterContext);
};
