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
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
