'use client'
import { Facebook, Instagram, Youtube } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { data } from '../../settings/website-data'

const Footer = () => {
  return (
    <footer className="relative mx-auto max-w-[1200px] bg-footer p-[24px]">
      <div className="grid gap-2 md:grid-cols-4">
        <div>
          <h3 className="text-black font-bold mb-2 md:mb-4">Bạn cần hỗ trợ ? Gọi ngay hotline:</h3>
          <Link className="text-3xl" href={`tel:${data.zalo}`}>
            {data.zalo}
          </Link>
          <br />
          Mail: <Link href={`mailto:${data.email}`}>{data.email}</Link>
          <br />
          Zalo: <Link href={`https://zalo.me/${data.zalo}`}>{data.zalo}</Link>
          <div>
            Chúng tôi trên mạng xã hội: <br />
            <ul className="inline-flex gap-2 mt-2">
              <li>
                <Link href="#">
                  <Instagram />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Facebook />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Youtube />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-black font-bold mb-2 md:mb-4">Điều Khoản Chính Sách</h3>
          <ul className="list-inside">
            <li>
              <Link href="chinh-sach-bao-mat">Chính sách bảo mật thông tin</Link>
            </li>
            <li>
              <Link href="phuong-thuc-thanh-toan">Thông tin về các phương thức thanh toán</Link>
            </li>
            <li>
              <Link href="dieu-kien-giao-dich">Thông tin về điều kiện giao dịch chung</Link>
            </li>
            <li>
              <Link href="chinh-sach-van-chuyen">Chính Sách Vận Chuyển & Giao nhận</Link>
            </li>
            <li>
              <Link href="chinh-sach-bao-hanh">Chính Sách Bảo Hành & Đổi Trả</Link>
            </li>
            <li>
              <Link href="gioi-thieu">Thông tin giới thiệu về chúng tôi</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-black font-bold mb-2 md:mb-4">Thông Tin Về Chúng Tôi</h3>

          <div>
            <h4>{data.storeName}</h4>
            <p>
              Địa chỉ:{' '}
              <Link href={data.location} target="_blank" className="underline">
                {data.address}
              </Link>
            </p>
            <p>Zipcode: {data.zipcode}</p>
            <p>{data.paper}</p>
          </div>
        </div>
        <div>
          <h3 className="text-black font-bold mb-2 md:mb-4">Chứng Nhận</h3>

          <Image src="/site/logoSaleNoti.png" width={185} height={70} alt="banner-noti" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
