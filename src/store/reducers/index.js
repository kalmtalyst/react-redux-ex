import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
export default combineReducers({ cartReducer });

// 리듀서가 여러개일때
// import cartReducer from "./cartReducer";
// const rootReducer = combineReducers({
//   addCart: cartReducer,
//   delCart: cartdelReducer,
// })

// export default rootReducer;
