
const mycall = {
  loading : false,
  user : null,
  error : false
};
function apicallReducer(state = mycall, action) {
  if (action.type === "LOADING") {
    return {
      loading : true,
      user : null,
      error : false
    };
  } else if(action.type === "ERROR"){
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
  else{
    return {
      loading : false,
      user : null,
      error : false
    };
  }
}



export { apicallReducer };