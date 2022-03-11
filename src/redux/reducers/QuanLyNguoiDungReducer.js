import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import { DANG_NHAP_ACTION } from "../types/QuanLyNguoiDungType";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN)) || null;
}

const initialState = {
  userLogin: user,
  thongTinNguoiDung: {},
};

export const QuanLyNguoiDungReducer = (state = initialState, action) => {
  switch (action.type) {
    case DANG_NHAP_ACTION: {
      const { thongTinDangNhap } = action;
      localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap.user));
      localStorage.setItem(TOKEN, thongTinDangNhap.token);
    }
    default:
      return { ...state };
  }
};
