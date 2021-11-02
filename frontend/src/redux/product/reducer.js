const mycall = {
    loading : false,
    products : [],
    error : false
  };
function productApis(state = mycall, action) {
    if (action.type === "PRODUCT_LOADINGS") {
      return {
        loading : true,
        products : [...state.products],
        error : false
      };
    } else if(action.type === "PRODUCT_ERRORS"){
      return {
        loading : false,
        products : [...state.products],
        error : true
      };
    }
    else if(action.type === "ADD_SINGLE_PRODUCT"){
      const newAddedProduct = {...action.payload}
      return {
        loading : false,
        products :[...state.products , newAddedProduct],
        error : false
      };
    }
    else if(action.type === "ADD_ALL_PRODUCTS"){
      return {
        loading : false,
        products :[...action.payload ] ,
        error : false
      };
    }

    else if(action.type === "DELETE_ITEM"){
      const deleteId= action.payload
      const newProducts=state.products.filter(item => item._id !== deleteId)
      console.log(newProducts)
      return {
        loading : false,
        products :[...newProducts ] ,
        error : false
      };
    }



    else{
      return {...state}
    }
    
  }
  
export {productApis};
  
  
