import Link from "next/link";
import { SlBasket, SlCallIn, SlHeart, SlMagnifier, SlPresent, SlUser } from "react-icons/sl";

export default function Header(){
  return(
<>
   {/* start Header */}
   <section className="myheader">
        <div className="container  py-3">
          <div className="row">
            <div className="col-md-3">
            <Link href={"/"}>
              <img src="/image/logo2.webp" className="img-fluid w-75" alt="" />
              </Link>
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
                      <div style={{ color: "rgba(3, 6, 5, 1)" }} className="fs-2 ">
                        <SlCallIn />
                      </div>
                    </div>
                    <div className="col-9">
                      Tư vấn hỗ trợ <br />
                      <strong style={{ color: "rgba(3, 6, 5, 1)" }} className="">23095820935</strong>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col-3">
                      <Link href={"/login"}>
                      <div style={{ color: "rgba(3, 6, 5, 1)" }} className="fs-2 ">
                        <SlUser />
                      </div>
                      </Link>
                      
                    </div>  
                    <div className="col-9">
                      Xin Chào <br />
                      <strong style={{ color: "rgba(3, 6, 5, 1)"}} className="">Đăng Nhập</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="row">
                <div className="col">
                  <a href="/#" className=" position-relative">
                    <span style={{ color: "rgba(3, 6, 5, 1)" }} className="fs-2 "><SlHeart /></span>
                    <span
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      0
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </a>
                </div>
                <div className="col">
                  <a href="/#" className=" position-relative">
                    <span style={{ color: "rgba(3, 6, 5, 1)" }} className="fs-2 "><SlPresent /></span>
                    <span
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      0
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </a>
                </div>
                <div className="col">
                  <a href="/#" className=" position-relative">
                    <span style={{ color: "rgba(3, 6, 5, 1)" }} className="fs-2 "><SlBasket /></span>
                    <span
                      className=" position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
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
    {/*End Header */}
</>
    
  )
     
}