import { data } from '@/settings/website-data'

const page = () => {
  return (
    <div className="px-5">
      <h1 className="klb-page-title">Chính sách bảo mật thông tin</h1>
      <p>
        Cam kết cung cấp đến khách hàng sản phẩm và dịch vụ tốt, vượt trội, uy tín và đáng tin cậy.
        Trong đó bao gồm cả việc đảm bảo tính bảo mật đối với tất cả các thông tin cá nhân của chính
        họ. Trong quá trình quản lý thông tin, chúng tôi luôn tuân thủ theo các Nguyên tắc Bảo mật
        sau đây:
      </p>
      <p>
        <strong>1. Mục đích thu thập thông tin cá nhân:</strong>
      </p>
      <p>Liên lạc, tư vấn, xác nhận đơn hàng với khách hàng.</p>
      <p>Gửi hàng đến địa chỉ khách hàng yêu cầu</p>
      <p>Lưu trữ xác định khách hàng mới hay khách hàng cũ, số lần, số lượng và sản phẩm đã mua.</p>
      <p>
        <strong>2. Phạm vi thu thập thông tin cá nhân:</strong>
      </p>
      <p>
        Tiến hành thu thập thông tin trực tiếp từ khách hàng để giao dịch mua bán.
        <br />
        Thông tin thu thập về khách hàng dựa trên thông tin khách hàng cung cấp: bao gồm họ tên, số
        điện thoại, địa chỉ nhận hàng, sản phẩm và số lượng cần mua.
        <br />
        Chúng tôi có thể thu thập những thông tin như địa chỉ IP, hệ điều hành thiết bị khách hàng
        đang sử dụng, thời điểm và thời gian khách hàng truy cập vào trang web, địa điểm truy cập
        Internet và các đề mục khách hàng đã truy cập trong trang web với mục đích hoàn thiện trang
        web cải thiện trải nghiệm mua sắm của khách hàng.
      </p>
      <p>
        <strong>3. Thời gian lưu trữ thông tin:</strong>
      </p>
      <p>
        Dữ liệu cá nhân của khách hàng sẽ được lưu trữ cho đến khi có yêu cầu hủy bỏ từ khách hàng
      </p>
      <p>
        <strong>
          4. <span>Những người hoặc tổ chức có thể được tiếp cận với thông tin khách hàng</span>:
        </strong>
        <br />
        Chỉ sử dụng hoặc tiết lộ thông tin cá nhân của khách hàng theo đúng mục đích thu thập. Chúng
        tôi không chia sẻ thông tin cá nhân của khách hàng với bất kỳ tổ chức nào bên ngoài ngoại
        trừ dịch vụ giao hàng bao gồm: Họ tên, địa chỉ, số điện thoại, sản phẩm đặt mua, giá tiền
        của đơn hàng.
      </p>
      <p>
        <strong>5. Địa chỉ của đơn vị thu thập và quản lý thông tin</strong>
      </p>
      <p>{data.storeName}</p>
      <p>Địa chỉ: {data.address}</p>
      <p>Điện thoại: {data.zalo}</p>
      <p>Email: {data.email}</p>
      <p>
        <strong>
          6. Phương thức và công cụ để người tiêu dùng tiếp cận và chỉnh sửa dữ liệu cá nhân của
          mình
        </strong>
      </p>
      <p>
        Chúng tôi lưu trữ thông tin khách hàng trên phần mềm quản lý bán hàng chuyên dụng chỉ chúng
        tôi mới đăng nhập chỉnh sửa, thêm, xóa thông tin. Người tiêu dùng có thể hỏi về hoạt động
        thu thập, xử lý chỉnh sửa, thêm, xóa thông tin liên quan đến cá nhân mình thông qua phương
        thức liên hệ tại mục 5.
      </p>
      <p>
        <strong>
          7. Cơ chế tiếp nhận và giải quyết khiếu nại của người tiêu dùng liên quan đến việc thông
          tin cá nhân bị sử dụng sai mục đích, phạm vi đã thông báo
        </strong>
      </p>
      <p>
        Chúng tôi cam kết sẽ quản lý thông tin cá nhân của khách hàng dưới sự kiểm soát cẩn trọng.
        Chỉ sử dụng cho mục đích mua bán của 2 bên. Không spam quảng cáo, làm phiền. Không chia sẻ
        cho bên thứ 3 nào khác ngoại trừ bên giao hàng.
      </p>
      <p>
        Trong trường hợp máy chủ, phần mềm lưu trữ thông tin bị hacker tấn công dẫn đến mất mát dữ
        liệu cá nhân khách hàng, chúng tôi sẽ có trách nhiệm làm việc với bên cung cấp phần mềm để
        xử lý.
      </p>
      <p>
        Khi phát hiện thông tin cá nhân của mình bị sử dụng sai mục đích hoặc phạm vi, khách hàng có
        thể liên hệ tới số điện thoại {data.zalo} để khiếu nại và cung cấp chứng cứ liên quan tới vụ
        việc. Chúng tôi cam kết sẽ phản hồi ngay lập tức hoặc muộn nhất là trong vòng 3 ngày làm
        việc kể từ thời điểm nhận được khiếu nại.
      </p>{' '}
    </div>
  )
}

export default page
