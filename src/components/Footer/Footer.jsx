import logo from "../../assets/img/logo.png";

const Footer = () => {
  const dateNow = new Date().getFullYear();
  return (
    <footer
    id="footer"
      className="px-4  max-w-7xl mx-auto md:px-12 overflow-hidden 
    md:border-t-2 md:border-gray-700
    "
    >
      <div className="footer__wrapper mt-4  ">
        <div className="footer__content">
          <div className="footer__group  
          
          lg:grid lg:grid-cols-5 lg:grid-rows-1 lg:gap-4 ">
            <div className="footer__item-1">
              <img src={logo} alt="logo footer" />
              <p className="text-sm">
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit.
              </p>
              <ul
                className="
                mt-4
                flex flex-grow  flex-shrink-0 
                lg:flex lg:flex-row lg:items-center gap-4"
              >
                <li>
                  <i className="ri-facebook-line text-xl text-gray-50"></i>{" "}
                </li>
                <li>
                  <i className="ri-twitter-line text-xl text-gray-50"></i>
                </li>
                <li>
                  <i className="ri-instagram-line text-xl text-gray-50"></i>
                </li>
                <li>
                  <i className="ri-linkedin-box-line text-xl text-gray-50"></i>
                </li>
              </ul>
            </div>
            {/* footer__item-2 */}

            <div className="footer__item-2">
              <h6 className="text-gray-50 text-xl font-bold">Company</h6>
              <ul className="mt-4 flex flex-col gap-2">
                <li className="text-sm "> Home</li>
                <li className="text-sm ">Product</li>
                <li className="text-sm ">
                  Carrers{" "}
                  <span className="bg-blue-700 py-1 px-1 rounded-sm text-gray-50">
                    {" "}
                    Hiring{" "}
                  </span>{" "}
                </li>
                <li className="text-sm ">Pricing</li>
              </ul>
            </div>
            {/* footer__item-3 */}

            <div className="footer__item-2">
              <h6 className="text-gray-50 text-xl font-bold">Support</h6>
              <ul className="mt-4 flex flex-col gap-2">
                <li className="text-sm ">Compagny</li>
                <li className="text-sm ">Press Media</li>
                <li className="text-sm ">Our blog</li>
                <li className="text-sm ">Contact Us</li>
              </ul>
            </div>
            {/* footer__item-4 */}
            <div className="footer__item-2">
              <h6 className="text-gray-50 text-xl font-bold">Get in touch</h6>
              <ul className="mt-4 flex flex-col gap-2">
                <li className="text-sm ">
                  Tol Free Customer <br /> core
                </li>
                <li className="text-sm ">
                  <span className="font-bold text-gray-50">0123 344 566</span>
                </li>
                <li className="text-sm ">Need live Support ?</li>
                <li className="text-sm ">
                  <span className="font-bold text-gray-50">support@gostartup.com</span>
                </li>
              </ul>
            </div>
            {/* footer__item-5 */}
            <div className="footer__item-2 ">
              <h6 className="text-gray-50 text-xl font-bold">Newsletter</h6>
              <ul className="mt-4 flex flex-col gap-2">
                <li className="text-sm ">Subscribe to receive future updates </li>
                <form>
                  <div className=" flex items-center gap-4 bg-slate-100">
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className="bg-slate-100 px-4 py-2 w-full   focus:outline-none 
                        focus:border-none"
                    />
                    <i
                      className="ri-arrow-right-box-fill text-2xl text-gray-500 border-l-2 border-gray-600 pl-2 
                      
                        "
                    ></i>
                  </div>
                </form>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* end of footer__wrapper */}
      <div className="mt-[50px] border-t-2 border-gray-700  mb-4 ">
        <div className="mt-5 lg:flex lg:justify-between lg:items-center">
          <div className=" ">
            <ul className="flex  gap-4 text-gray-50 items-center n">
              <li className="text-sm text-gray-500">English</li>
              <li className="text-sm text-gray-500">Privacy Policy</li>
              <li className="text-sm text-gray-500"> Support</li>
            </ul>
          </div>
          <div className='mt-4 lg:mt-0'>
            <p className="text-sm text-gray-500">
              © {dateNow} Abdoul. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
