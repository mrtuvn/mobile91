import { data } from '../../settings/website-data'

const page = () => {
  return (
    <div className="px-5">
      <h1 className="klb-page-title">Thông tin về các phương thức thanh toán</h1>
      <div className="klb-post">
        <p>{data.storeName} nhận thanh toán qua phương thức sau:</p>
        <p>
          <strong>1. Thanh toán bằng tiền mặt khi nhận hàng</strong>
        </p>
        <p>
          Khách hàng nhận hàng và thanh toán tiền trực tiếp với cá nhân hoặc nhân viên công ty giao
          hàng
        </p>
        <p>
          <strong>2. Thanh toán chuyển khoản trực tiếp:</strong>
        </p>
        <p>
          Số tài khoản: <strong>{data.bankAccountNum}</strong>
        </p>
        <p>Ngân hàng: {data.bankBrand}</p>
        <p>Người thụ hưởng: {data.bankOwnerName}</p>
        <p>
          Quý khách hàng lưu ý ghi rõ họ tên và báo ngay lại với người bán hàng khi đã chuyển khoản
          thành công.
        </p>
      </div>
    </div>
  )
}

export default page
