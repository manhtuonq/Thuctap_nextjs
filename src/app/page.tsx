

export default function Home() {

  return (

    <>
      <section className="myheader">
        <div className="container  py-3">
          <div className="row">
            <div className="col-md-3">
              <img src="/image/logo.png" className="img-fluid" alt="" />
            </div>
            <div className="col-md-4">
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Recipient's username"
                  aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2"><i
                  className="fa-solid fa-magnifying-glass"></i></span>
              </div>
            </div>
            <div className="col-md-3">
              <div className="row">
                <div className="col">
                  <div className="row">
                    <div className="col-3">
                      <div className="fs-2 text-dark">
                        <i className="fa-solid fa-phone"></i>
                      </div>
                    </div>
                    <div className="col-9">
                      Tư vấn hỗ trợ <br />
                      <strong className="text-dark">23095820935</strong>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col-3">
                      <div className="fs-2 text-dark">
                        <i className="fa-solid fa-user"></i>
                      </div>
                    </div>
                    <div className="col-9">
                      Xin Chào <br />
                      <strong className="text-dark">Đăng Nhập</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="row">
                <div className="col">
                  <a href="/#" className=" position-relative">
                    <span className="fs-2"><i className="fa-regular fa-heart"></i></span>
                    <span
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      0
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </a>
                </div>
                <div className="col">
                  <a href="/#" className=" position-relative">
                    <span className="fs-2"><i className="fa-solid fa-bag-shopping"></i></span>
                    <span
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      0
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </a>
                </div>
                <div className="col">
                  <a href="/#" className=" position-relative">
                    <span className="fs-2"><i className="fa-regular fa-comment"></i></span>
                    <span
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
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

      <section className="mymainmenu bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-white py-3">Danh Mục sản Phẩm</div>
            <div className="col-md-9">
              <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                  <a className="navbar-brand d-none" href="#">Navbar</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
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
            <div className="row py-3">
              <div className="col-md-6 text-center">
                <img src="/image/product02.jpg" alt="Product Image" className="img-fluid mb-3 w-75" />
                <div className="d-flex justify-content-center py-3">
                  <button style={{ borderRadius: "1px" }} type="button" className="btn btn-outline-dark w-25 p-3">Shop
                    Now</button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col">
                    <img className="w-100" src="/image/product05.jpg" alt="" />
                    <strong>MSI Gaming GF63 12UC i5 12450H</strong>
                    <br />
                    <p>BRAND</p>
                    <div>
                      <div className="row">
                        <div className="col-md-4">
                          <p>AED 32.00</p>
                        </div>
                        <div className="col-md-4">
                          <p>AED 25.60</p>
                        </div>

                        <div className="col-md-4">
                          <button type="button" className=" btn btn-outline-dark w-100 h-75 ">
                            <p>30% OFF </p>
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <img className="w-100" src="/image/product06.jpg" alt="" />
                    <strong>MSI Gaming GF63 12UC i5 12450H</strong>
                    <br />
                    <p>BRAND</p>
                    <div>
                      <div className="row">
                        <div className="col-md-4">
                          <p>AED 32.00</p>
                        </div>
                        <div className="col-md-4">
                          <p>AED 25.60</p>
                        </div>

                        <div className="col-md-4">
                          <button type="button" className=" btn btn-outline-dark w-100 h-75 ">
                            <p>30% OFF </p>
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="row py-3" >

              <div className="col-md-6">
                <div className="row">
                  <div className="col">
                    <img className="w-100" src="/image/product07.jpg" alt="" />
                    <strong>MSI Gaming GF63 12UC i5 12450H</strong>
                    <br />
                    <p>BRAND</p>
                    <div>
                      <div className="row">
                        <div className="col-md-4">
                          <p>AED 32.00</p>
                        </div>
                        <div className="col-md-4">
                          <p>AED 25.60</p>
                        </div>

                        <div className="col-md-4">
                          <button type="button" className=" btn btn-outline-dark w-100 h-75 ">
                            <p>30% OFF </p>
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <img className="w-100" src="/image/product08.jpg" alt="" />
                    <strong>MSI Gaming GF63 12UC i5 12450H</strong>
                    <br />
                    <p>BRAND</p>
                    <div>
                      <div className="row">
                        <div className="col-md-4">
                          <p>AED 32.00</p>
                        </div>
                        <div className="col-md-4">
                          <p>AED 25.60</p>
                        </div>

                        <div className="col-md-4">
                          <button type="button" className=" btn btn-outline-dark w-100 h-75 ">
                            <p>30% OFF </p>
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-md-6 text-center">
                <img src="/image/product10.jpg" alt="Product Image" className="img-fluid mb-3 w-75" />
                <div className="d-flex justify-content-center py-3">
                  <button style={{ borderRadius: "1px" }} type="button" className="btn btn-outline-dark w-25 p-3">Shop
                    Now</button>
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
                    <img src="image/product03.jpg" className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="item">
                  <div className="category-img">
                    <img src="image/product04.jpg" className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="item">
                  <div className="category-img">
                    <img src="image/product05.jpg" className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="item">
                  <div className="category-img">
                    <img src="image/product06 .jpg" className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container p-6">
            <div className="row">
              <div className="col-md-6">
                <div>
                  <img className="w-100" src="/image/product11.jpg" alt="" />
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
                    <img src="image/product03.jpg" className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="item">
                  <div className="category-img">
                    <img src="image/product04.jpg" className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="item">
                  <div className="category-img">
                    <img src="image/product05.jpg" className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="item">
                  <div className="category-img">
                    <img src="image/product06 .jpg" className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container p-6">
            <div className="row">
              <div className="col-md-6">
                <div>
                  <img className="w-100" src="/image/product11.jpg" alt="" />
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
                                    <img style={{height:"300px",width:"320px", objectFit:"cover"}} src="image/user02.jpg" alt=""/>
                                    <div className="d-flex justify-content-center py-3">
                                        <button style={{borderRadius:"20px"}} type="button" className="btn btn-outline-dark ">Mạnh Tường</button>
                                    </div>
           
                                </div>
                            </div>
                  </div>
                  <div className="col-md-3">
                  <div className="item">
                                <div className="category-img">
                                    <img style={{height:"300px",width:"320px", objectFit:"cover"}} src="image/user05.jpg" alt=""/>
                                    <div className="d-flex justify-content-center py-3">
                                        <button style={{borderRadius:"20px"}} type="button" className="btn btn-outline-dark ">Mạnh Tường</button>
                                    </div>
           
                                </div>
                            </div>
                  </div>
                  <div className="col-md-3">
                  <div className="item">
                                <div className="category-img">
                                    <img style={{height:"300px",width:"320px", objectFit:"cover"}} src="image/user04.jpg" alt=""/>
                                    <div className="d-flex justify-content-center py-3">
                                        <button style={{borderRadius:"20px"}} type="button" className="btn btn-outline-dark ">Mạnh Tường</button>
                                    </div>
           
                                </div>
                            </div>
                  </div>
                  <div className="col-md-3">
                  <div className="item">
                                <div className="category-img">
                                    <img style={{height:"300px",width:"320px", objectFit:"cover"}} src="image/user01.jpg" alt=""/>
                                    <div className="d-flex justify-content-center py-3">
                                        <button style={{borderRadius:"20px"}} type="button" className="btn btn-outline-dark ">Mạnh Tường</button>
                                    </div>
           
                                </div>
                            </div>
                  </div>
                 </div>
                </div>
            </div>
        </div>
    </section>

    
    <section className="myfooter bg-dark text-white py-4">
        <div className="container">
            <div className="row">
                <div className="col-md-3 ">
                    <h4>Về Chúng Tôi</h4>
                    <ul style={{listStyle:"none"}}>
                        <li><a style={{textDecoration:"none", color:"white"}} href="/mua-hang-tra-gop">Chính sách và
                                hướng dẫn mua hàng trả góp</a></li>
                        <li><a  style={{textDecoration:"none", color:"white"}}  href="/huong-dan-dat-hang">Hướng dẫn mua
                                hàng và chính sách vận chuyển</a></li>
                        <li><a  style={{textDecoration:"none", color:"white"}}  href="/order/check">Tra cứu đơn hàng</a>
                        </li>
                        <li><a  style={{textDecoration:"none", color:"white"}}  href="/chinh-sach-bao-hanh">Chính sách đổi
                                mới và bảo hành</a></li>
                        <li><a  style={{textDecoration:"none", color:"white"}}  href="/dat-hang/bao-hanh-mo-rong">Dịch vụ
                                bảo hành mở rộng</a></li>
                        <li><a  style={{textDecoration:"none", color:"white"}}  href="/chinh-sach-bao-mat">Chính sách bảo
                                mật</a></li>
                        <li><a  style={{textDecoration:"none", color:"white"}} 
                                href="/chinh-sach-giai-quyet-khieu-nai">Chính sách giải quyết khiếu nại</a></li>
                        <li><a  style={{textDecoration:"none", color:"white"}}  href="/dieu-khoan-mua-ban-hang-hoa">Quy chế
                                hoạt động</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h4>Về Chúng Tôi</h4>
                    <ul style={{listStyle:"none"}}>
                        <li><a  style={{textDecoration:"none", color:"white"}}  href="/mua-hang-tra-gop">Chính sách và
                                hướng dẫn mua hàng trả góp</a></li>
                        <li><a  style={{textDecoration:"none", color:"white"}}  href="/huong-dan-dat-hang">Hướng dẫn mua
                                hàng và chính sách vận chuyển</a></li>
                        <li><a  style={{textDecoration:"none", color:"white"}}  href="/order/check">Tra cứu đơn hàng</a>
                        </li>
                        <li><a  style={{textDecoration:"none", color:"white"}}  href="/chinh-sach-bao-hanh">Chính sách đổi
                                mới và bảo hành</a></li>
                        <li><a  style={{textDecoration:"none", color:"white"}}  href="/dat-hang/bao-hanh-mo-rong">Dịch vụ
                                bảo hành mở rộng</a></li>
                        <li><a  style={{textDecoration:"none", color:"white"}}  href="/chinh-sach-bao-mat">Chính sách bảo
                                mật</a></li>
                        <li><a  style={{textDecoration:"none", color:"white"}} 
                                href="/chinh-sach-giai-quyet-khieu-nai">Chính sách giải quyết khiếu nại</a></li>
                        <li><a  style={{textDecoration:"none", color:"white"}}  href="/dieu-khoan-mua-ban-hang-hoa">Quy chế
                                hoạt động</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h4>Về Chúng Tôi</h4>
                    <ul style={{listStyle:"none"}}>
                        <li><a  style={{textDecoration:"none", color:"white"}}  href="/mua-hang-tra-gop">Chính sách và
                                hướng dẫn mua hàng trả góp</a></li>
                        <li><a  style={{textDecoration:"none", color:"white"}}  href="/huong-dan-dat-hang">Hướng dẫn mua
                                hàng và chính sách vận chuyển</a></li>
                        <li><a  style={{textDecoration:"none", color:"white"}}  href="/order/check">Tra cứu đơn hàng</a>
                        </li>
                        <li><a  style={{textDecoration:"none", color:"white"}}  href="/chinh-sach-bao-hanh">Chính sách đổi
                                mới và bảo hành</a></li>
                        <li><a  style={{textDecoration:"none", color:"white"}}  href="/dat-hang/bao-hanh-mo-rong">Dịch vụ
                                bảo hành mở rộng</a></li>
                        <li><a  style={{textDecoration:"none", color:"white"}}  href="/chinh-sach-bao-mat">Chính sách bảo
                                mật</a></li>
                        <li><a  style={{textDecoration:"none", color:"white"}} 
                                href="/chinh-sach-giai-quyet-khieu-nai">Chính sách giải quyết khiếu nại</a></li>
                        <li><a  style={{textDecoration:"none", color:"white"}}  href="/dieu-khoan-mua-ban-hang-hoa">Quy chế
                                hoạt động</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5>Nhận Tin Khuyến Mãi</h5>
                    <p> có cấu trúc xử lý JavaScript khác so với các ứng dụng đơn giản khác. Cụ thể, khi sử dụng thư viện </p>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Recipient's username"
                            aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <span className="input-group-text" id="basic-addon2">@example.com</span>
                    </div>

                    <div>
                        <span className="box50  border border-danger mr-3">
                            <i className="fa-brands fa-facebook"></i>
                        </span>
                    </div>

                </div>
            </div>
            <hr/>
           

        </div>
    </section>
    </>



  )
}