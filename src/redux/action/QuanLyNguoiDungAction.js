import { quanLyNguoiDungService } from "../../services/User";
import { DANG_KY_ACTION, DANG_NHAP_ACTION } from "../types/QuanLyNguoiDungType";
import { history } from "../../App";
import toast from "react-hot-toast";
export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);

      if (result.status === 200) {
        dispatch({
          type: DANG_NHAP_ACTION,
          thongTinDangNhap: result.data,
        });
        //Chuyển hướng đăng nhập về trang trước đó
        toast.success(result.data.message);
        history.goBack();
      }
    } catch (error) {
      console.log(error.response);
    }
  };
};
export const dangKyAction = (thongTinDangKy) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangKy(thongTinDangKy);
      if (result.status === 201) {
        alert("Đăng ký xong rồi đấy!");
        // console.log("hello");
        dispatch({
          type: DANG_KY_ACTION,
          thongTinDangKy: result.data,
        });

        history.goBack();
      }
      console.log("result11111", result);
    } catch (error) {
      console.log(error.response);
    }
  };
};
