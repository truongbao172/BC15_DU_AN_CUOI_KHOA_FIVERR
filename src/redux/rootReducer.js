import { combineReducers } from "redux";
import DanhSachCongViecReducer from "./reducers/DanhSachCongViecReducer";
import ListTypeJobReducer from "./reducers/ListTypeJobReducer";
import { QuanLyNguoiDungReducer } from "./reducers/QuanLyNguoiDungReducer";

export const rootReducer = combineReducers({
  DanhSachCongViecReducer,
  ListTypeJobReducer,
  QuanLyNguoiDungReducer,
});
export default rootReducer;
