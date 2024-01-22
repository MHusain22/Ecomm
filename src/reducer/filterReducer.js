import { ProductData } from "../components/ProductData.js";

const filterReducer = (state, action) => {
  switch (action.type) {
    case "GET_SORT_VALUE":
      // let userSortValue = document.getElementById("sort");
      // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      // console.log(sort_value);
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      //a-z
      if (state.sorting_value === "a-z") {
        newSortData = ProductData.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      //z-a
      if (state.sorting_value === "z-a") {
        newSortData = ProductData.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }
      //lowest
      if (state.sorting_value === "lowest") {
        const sortingProducts = (a, b) => {
          return a.price - b.price;
        };
        newSortData = ProductData.sort(sortingProducts);
      }
      //highest
      if (state.sorting_value === "highest") {
        const sortingProducts = (a, b) => {
          return b.price - a.price;
        };
        newSortData = ProductData.sort(sortingProducts);
      }

      return {
        ...state,
        filter_products: newSortData,
      };

    case "FILTER_PRODUCTS":
      let { products } = state;
      let tempFilterProduct = [...products];

      const { type } = state.filters;
      if (type) {
        tempFilterProduct = tempFilterProduct.filter((currElem) => {
          return currElem.type === type;
        });
      }

    case "UPDATE_FILTER_VALUE":
    //   const {value,name} = action.payload;
      

    //   return {
    //     ...state,
    //     filters: {
    //       ...state.filters,
    //       [name]: value,
    //     },
    //   };

    default:
      return state;
  }
};

export default filterReducer;
