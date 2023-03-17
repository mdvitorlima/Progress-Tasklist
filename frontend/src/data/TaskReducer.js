const initialState = {
    tasks: []
  };
  
  export function TaskReducer(state = initialState, action) {
  
    
    if (action.type === "STORE_DATA") {
     
      return Object.assign({}, state, {
        tasks: state.tasks.concat(action.payload.data)
      });

    }
    
    if (action.type === "DATA_LOADED") {
  
      return Object.assign({}, state, {
        tasks: state.tasks.concat(...action.payload.data)
      });
    }
    
    if (action.type === "UPDATE_DATA") {
       
      for (let x = 0; x < state.tasks.length; x++) {
        if (state.tasks[x]._id == action.payload.data._id) {
          state.tasks[x] = action.payload.data;
        }
      }
            
      return Object.assign({}, state, {
        tasks: state.tasks
      });
    }
    
    return state;
  
  }
  