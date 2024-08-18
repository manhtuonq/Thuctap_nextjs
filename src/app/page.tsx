'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SlCallIn } from "react-icons/sl";
import { SlUser } from "react-icons/sl";
import { SlHeart } from "react-icons/sl";
import { SlPresent } from "react-icons/sl";
import { SlBasket } from "react-icons/sl";
import { SlMagnifier } from "react-icons/sl";
interface Product {
  product_title: string;
  product_gallery: string[];
}
export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    axios.get('https://api-pro.teklearner.com/product/v1/get-list-product')
      .then(response => {
        setProducts(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);
  return (

    <>
      <section className="myheader">
        <div className="container  py-3">
          <div className="row">
            <div className="col-md-3">
              <img src="/image/logo2.webp" className="img-fluid w-75" alt="" />
            </div>
            <div className="col-md-4">
              <div className="input-group mb-3">
                <input type="text" className="form-control " placeholder="Tìm Kiếm"
                  aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2"><SlMagnifier /></span>
              </div>
            </div>
            <div className="col-md-3">
              <div className="row">
                <div className="col">
                  <div className="row">
                    <div className="col-3">
                      <div style={{color:"rgba(3, 6, 5, 1)"}} className="fs-2 ">
                        <SlCallIn />
                      </div>
                    </div>
                    <div className="col-9">
                      Tư vấn hỗ trợ <br />
                      <strong  style={{color:"rgba(3, 6, 5, 1)"}} className="">23095820935</strong>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col-3">
                      <div  style={{color:"rgba(3, 6, 5, 1)"}} className="fs-2 ">
                        <SlUser />
                      </div>
                    </div>
                    <div className="col-9">
                      Xin Chào <br />
                      <strong  style={{color:"rgba(3, 6, 5, 1)"}} className="">Đăng Nhập</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="row">
                <div className="col">
                  <a href="/#" className=" position-relative">
                    <span   style={{color:"rgba(3, 6, 5, 1)"}} className="fs-2 "><SlHeart /></span>
                    <span
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      0
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </a>
                </div>
                <div className="col">
                  <a href="/#" className=" position-relative">
                    <span  style={{color:"rgba(3, 6, 5, 1)"}} className="fs-2 "><SlPresent /></span>
                    <span
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      0
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </a>
                </div>
                <div className="col">
                  <a href="/#" className=" position-relative">   
                    <span  style={{color:"rgba(3, 6, 5, 1)"}} className="fs-2 "><SlBasket /></span>
                    <span
                      className= " position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      0
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section style={{backgroundColor:"rgba(3, 6, 5, 1)"}} className="mymainmenu ">
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-white py-3">Danh Mục sản Phẩm</div>
            <div className="col-md-9">
              <nav  style={{backgroundColor:"rgba(3, 6, 5, 1)"}} className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                  <a className="navbar-brand d-none" href="#">Navbar</a>
                  <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a className="nav-link active text-white" aria-current="page" href="#">Trang Chủ</a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-white" href="#" role="button"
                          data-bs-toggle="dropdown" aria-expanded="false">
                          Liện Hệ
                        </a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-white" href="#" role="button"
                          data-bs-toggle="dropdown" aria-expanded="false">
                          Sản Phẩm
                        </a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-white" href="#" role="button"
                          data-bs-toggle="dropdown" aria-expanded="false">
                          Thông Tin
                        </a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-white" href="#" role="button"
                          data-bs-toggle="dropdown" aria-expanded="false">
                          Khuyễn Mãi
                        </a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </li>

                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="products">
        <div className="container py-3">
          <div className="row py-4">

            <h2><strong>NEW ARRIVALS</strong></h2>
            {products.length > 0 && (
              <>
                {/* First Row of Products */}
                <div className="col-md-6 text-center">
                  <img
                    src={products[0].product_gallery[0]}
                    alt={products[0].product_title}
                    className="img-fluid mb-3 w-50"
                  />
                  <div className="d-flex justify-content-center py-3">
                    <button
                      style={{ borderRadius: '1px' }}
                      type="button"
                      className="btn btn-outline-dark w-25 p-3"
                    >
                      Buy now
                    </button>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col">
                      <img className="w-100" src={products[1].product_gallery[0]} alt={products[1].product_title} />
                      <strong>{products[1].product_title}</strong>
                      <br />
                      <p>BRAND</p>
                      <div className="row">
                        <div className="col-md-4">
                          <p>AED 32.00</p>
                        </div>
                        <div className="col-md-4">
                          <p>AED 25.60</p>
                        </div>
                        <div className="col-md-4">
                          <button type="button" className=" btn btn-outline-dark w-100 h-75 ">
                            <p>30% OFF</p>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <img className="w-100" src={products[2].product_gallery[0]} alt={products[2].product_title} />
                      <strong>{products[2].product_title}</strong>
                      <br />
                      <p>BRAND</p>
                      <div className="row">
                        <div className="col-md-4">
                          <p>AED 32.00</p>
                        </div>
                        <div className="col-md-4">
                          <p>AED 25.60</p>
                        </div>
                        <div className="col-md-4">
                          <button type="button" className=" btn btn-outline-dark w-100 h-75 ">
                            <p>30% OFF</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {products.length > 0 && (
              <>
                {/* Second Row of Products */}

                <div className="col-md-6">
                  <div className="row">
                    <div className="col">
                      <img className="w-100" src={products[1].product_gallery[0]} alt={products[1].product_title} />
                      <strong>{products[1].product_title}</strong>
                      <br />
                      <p>BRAND</p>
                      <div className="row">
                        <div className="col-md-4">
                          <p>AED 32.00</p>
                        </div>
                        <div className="col-md-4">
                          <p>AED 25.60</p>
                        </div>
                        <div className="col-md-4">
                          <button type="button" className=" btn btn-outline-dark w-100 h-75 ">
                            <p>30% OFF</p>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <img className="w-100" src={products[2].product_gallery[0]} alt={products[2].product_title} />
                      <strong>{products[2].product_title}</strong>
                      <br />
                      <p>BRAND</p>
                      <div className="row">
                        <div className="col-md-4">
                          <p>AED 32.00</p>
                        </div>
                        <div className="col-md-4">
                          <p>AED 25.60</p>
                        </div>
                        <div className="col-md-4">
                          <button type="button" className=" btn btn-outline-dark w-100 h-75 ">
                            <p>30% OFF</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 text-center">
                  <img
                    src={products[0].product_gallery[0]}
                    alt={products[0].product_title}
                    className="img-fluid mb-3 w-50"
                  />
                  <div className="d-flex justify-content-center py-3">
                    <button
                      style={{ borderRadius: '1px' }}
                      type="button"
                      className="btn btn-outline-dark w-25 p-3"
                    >
                      Buy now
                    </button>
                  </div>
                </div>
              </>
            )}

          </div>
        </div>
      </section>


      <section className="topsaleler">
        <div className="container">
          <div className="cate-list">
            <div className="row">
              <h2><strong>TOP SELLERS</strong></h2>
              <div className="col-md-3">
                <div className="item">
                  <div className="category-img">
                    <img src="image/pro03.webp" className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="item">
                  <div className="category-img">
                    <img src="image/pro02.webp" className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="item">
                  <div className="category-img">
                    <img src="image/pro03.webp" className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="item">
                  <div className="category-img">
                    <img src="image/pro02.webp" className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container p-6">
            <div className="row">
              <div className="col-md-6">
                <div>
                  <img className="w-100 py-3" src="/image/pro06.webp" alt="" />
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className="row " style={{ height: "50v" }}>
                  <div className="col-auto">
                    <h1><span>50% OFF</span></h1> <br />
                    <h4>All <strong>SKINCARE Items</strong></h4>
                  </div>
                  <div className="col-auto">
                    <button style={{ borderRadius: "1px" }} type="button"
                      className="btn btn-outline-dark w-100 p-3">Shop Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="topsaleler">
        <div className="container">
          <div className="cate-list">
            <div className="row">
              <h2><strong>TOP SELLERS</strong></h2>
              <div className="col-md-3">
                <div className="item">
                  <div className="category-img">
                    <img src="image/pro07.webp" className="img-fluid h-50" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="item">
                  <div className="category-img">
                    <img src="image/pro08.webp" className="img-fluid h-50" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="item">
                  <div className="category-img">
                    <img src="image/pro09.webp" className="img-fluid h-50" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="item">
                  <div className="category-img">
                    <img src="image/pro10.webp" className="img-fluid h-50" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container p-6">
            <div className="row">
              <div className="col-md-6">
                <div>
                  <img className="w-100 py-3" src="/image/pro06.webp" alt="" />
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className="row " style={{ height: "50v" }}>
                  <div className="col-auto">
                    <h1><span>50% OFF</span></h1> <br />
                    <h4>All <strong>SKINCARE Items</strong></h4>
                  </div>
                  <div className="col-auto">
                    <button style={{ borderRadius: "1px" }} type="button"
                      className="btn btn-outline-dark w-100 p-3">Shop Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ambassador">
        <div className="container py-3">
          <div className="cate-list mb-3">
            <div className="row">
              <h2><strong>AMBASSADOR</strong></h2>
              <div className="row">
                <div className="col-md-3">
                  <div className="item">
                    <div className="category-img">
                      <img style={{ height: "300px", width: "320px", objectFit: "cover" }} src="image/user02.jpg" alt="" />
                      <div className="d-flex justify-content-center py-3">
                        <button style={{ borderRadius: "20px" }} type="button" className="btn btn-outline-dark ">User Name</button>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="item">
                    <div className="category-img">
                      <img style={{ height: "300px", width: "320px", objectFit: "cover" }} src="image/user05.jpg" alt="" />
                      <div className="d-flex justify-content-center py-3">
                        <button style={{ borderRadius: "20px" }} type="button" className="btn btn-outline-dark ">User Name</button>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="item">
                    <div className="category-img">
                      <img style={{ height: "300px", width: "320px", objectFit: "cover" }} src="image/user04.jpg" alt="" />
                      <div className="d-flex justify-content-center py-3">
                        <button style={{ borderRadius: "20px" }} type="button" className="btn btn-outline-dark ">User Name</button>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="item">
                    <div className="category-img">
                      <img style={{ height: "300px", width: "320px", objectFit: "cover" }} src="image/user01.jpg" alt="" />
                      <div className="d-flex justify-content-center py-3">
                        <button style={{ borderRadius: "20px" }} type="button" className="btn btn-outline-dark ">User Name</button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section  style={{backgroundColor:"rgba(3, 6, 5, 1)"}} className="myfooter  text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3 ">
              <h4>Về Chúng Tôi</h4>
              <ul style={{ listStyle: "none" }}>
                <li><a style={{ textDecoration: "none", color: "white" }} href="/mua-hang-tra-gop">Chính sách và
                  hướng dẫn mua hàng trả góp</a></li>
                <li><a style={{ textDecoration: "none", color: "white" }} href="/huong-dan-dat-hang">Hướng dẫn mua
                  hàng và chính sách vận chuyển</a></li>
                <li><a style={{ textDecoration: "none", color: "white" }} href="/order/check">Tra cứu đơn hàng</a>
                </li>
                <li><a style={{ textDecoration: "none", color: "white" }} href="/chinh-sach-bao-hanh">Chính sách đổi
                  mới và bảo hành</a></li>
                <li><a style={{ textDecoration: "none", color: "white" }} href="/dat-hang/bao-hanh-mo-rong">Dịch vụ
                  bảo hành mở rộng</a></li>
                <li><a style={{ textDecoration: "none", color: "white" }} href="/chinh-sach-bao-mat">Chính sách bảo
                  mật</a></li>
                <li><a style={{ textDecoration: "none", color: "white" }}
                  href="/chinh-sach-giai-quyet-khieu-nai">Chính sách giải quyết khiếu nại</a></li>
                <li><a style={{ textDecoration: "none", color: "white" }} href="/dieu-khoan-mua-ban-hang-hoa">Quy chế
                  hoạt động</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4>Công ty</h4>
              <ul style={{ listStyle: "none" }}>
                <li><a style={{ textDecoration: "none", color: "white" }} href="/mua-hang-tra-gop">Chính sách và
                Giới thiệu về ROUTINE</a></li>
                <li><a style={{ textDecoration: "none", color: "white" }} href="/huong-dan-dat-hang">
                Tin thời trang</a></li>
                <li><a style={{ textDecoration: "none", color: "white" }} href="/order/check">Tra cứu đơn hàng</a>
                </li>
                <li><a style={{ textDecoration: "none", color: "white" }} href="/chinh-sach-bao-hanh">
                THE 31</a></li>
                <li><a style={{ textDecoration: "none", color: "white" }} href="/dat-hang/bao-hanh-mo-rong">
                In ấn đồng phục</a></li>
                <li><a style={{ textDecoration: "none", color: "white" }} href="/chinh-sach-bao-mat">Hợp tác nhượng quyền</a></li>
                <li><a style={{ textDecoration: "none", color: "white" }}
                  href="/chinh-sach-giai-quyet-khieu-nai">Tuyển dụng</a></li>
                <li><a style={{ textDecoration: "none", color: "white" }} href="/dieu-khoan-mua-ban-hang-hoa">Liên hệ</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4>Chính sách khách hàng</h4>
              <ul style={{ listStyle: "none" }}>
                <li><a style={{ textDecoration: "none", color: "white" }} href="/mua-hang-tra-gop">
                Chính sách khách hàng thân thiết</a></li>
                <li><a style={{ textDecoration: "none", color: "white" }} href="/huong-dan-dat-hang">Chính sách đổi trả</a></li>
                <li><a style={{ textDecoration: "none", color: "white" }} href="/order/check">Chính sách bảo hành</a>
                </li>
                <li><a style={{ textDecoration: "none", color: "white" }} href="/chinh-sach-bao-hanh">Chính sách bảo mật</a></li>
                <li><a style={{ textDecoration: "none", color: "white" }} href="/dat-hang/bao-hanh-mo-rong">Câu hỏi thường gặp</a></li>
                <li><a style={{ textDecoration: "none", color: "white" }} href="/chinh-sach-bao-mat">Hướng dẫn mua hàng online</a></li>
                <li><a style={{ textDecoration: "none", color: "white" }}
                  href="/chinh-sach-giai-quyet-khieu-nai">Hướng dẫn kiểm tra hạng thành viên</a></li>
                <li><a style={{ textDecoration: "none", color: "white" }} href="/dieu-khoan-mua-ban-hang-hoa">Quy chế
                  hoạt động</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Nhận Tin Khuyến Mãi</h5>
              <p> có cấu trúc xử lý JavaScript khác so với các ứng dụng đơn giản khác. Cụ thể, khi sử dụng thư viện </p>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Recipient's username"
                  aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2">@example.com</span>
              </div>

              <div>
                <span className="box50  border border-danger mr-3">
                  <i className="fa-brands fa-facebook"></i>
                </span>
              </div>

            </div>
          </div>
          <hr />


        </div>
      </section>
    </>



  );
}