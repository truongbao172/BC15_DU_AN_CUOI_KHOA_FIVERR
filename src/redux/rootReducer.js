import { combineReducers } from "redux";
import DanhSachCongViecReducer from "./reducers/DanhSachCongViecReducer";
import ListTypeJobReducer from "./reducers/ListTypeJobReducer";

export const rootReducer = combineReducers({
  DanhSachCongViecReducer,
  ListTypeJobReducer,
});
export default rootReducer;
