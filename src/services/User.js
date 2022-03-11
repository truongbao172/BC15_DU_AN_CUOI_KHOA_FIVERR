import { baseService } from "./baseService";
import { GROUPID } from "../util/settings/config";
export class QuanLyNguoiDungService extends baseService {
  constructor() {
    super();
  }

  dangNhap = (thongTinDangNhap) => {
    // {taiKhoan:'',matKhau:''}
    return this.post(`/api/auth/signin`, thongTinDangNhap);
  };
  dangKy = (thongTinDangKy) => {
    return this.post(`/api/auth/signup`, thongTinDangKy);
  };
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
