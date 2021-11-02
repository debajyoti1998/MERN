
const mycall = {
  loading : false,
  user : null,
  error : false
};
function apicallReducer(state = mycall, action) {
  if (action.type === "USER_LOADING") {
    return {
      loading : true,
      user : null,
      error : false
    };
  } else if(action.type === "USER_ERROR"){
    return {
      loading : false,
      user : null,
      error : true
    };
  }
  else if(action.type === "UPDATE_USER"){
    return {
      loading : false,
      user :{...action.payload } ,
      error : false
    };
  }
  else if (action.type=== "USER_LOGOUT"){
    return {
      loading : false,
      user : null,
      error : false
    };
  }
  else{
    return {...state}
  }
  
}



export { apicallReducer };