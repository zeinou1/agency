import Common from "../components/UI/Common";

const Contact = () => {
  return (
    <>
      <div className="px-4 max-w-7xl mx-auto md:px-12 overflow-hidden">
        <div className="lg:flex lg:items-center lg:justify-center ">
          <div className="lg:w-1/2">
            <Common
              title="support"
              soustitle="Need Any Help? Say hello"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Donec vitae tortor aliquam ante."
            />
          </div>

          <div className=" w-full md:w-1/2  flex  items-center justify-center gap-4 mt-48">
            <hr className="w-[89px] h-1 bg-gray-50 hidden md:block"></hr>
            <span className="text-xl text-gray-50 mt-8 lg:mt-0">info@gostartup.com</span>
          </div>
        </div>
        <div className="mt-[230px] border-t-2 border-gray-700 mb-4">
          <div
            className="infos 
          flex  gap-4 flex-wrap justify-center
           mt-4 lg:flex lg:justify-between lg:items-center "
          >
            <div>
              <h6 className="text-[20px] text-gray-50">Email Address</h6>
              <p className="text-sm text-gray-60 mt-2">info@gostartup.com</p>
            </div>

            <div>
              <h6 className="text-[20px] text-gray-50">Phone Number</h6>
              <p className="text-sm text-gray-60 mt-2">03030302030230</p>
            </div>
            <div>
              <h6 className="text-[20px] text-gray-50">Office Location</h6>
              <p className="text-sm text-gray-60 mt-2">
                76/A Green valle, <br /> California USA
              </p>
            </div>
            <div className="network-social">
              <h6 className="text-[20px] text-gray-50">Phone Number</h6>
              <div className="text-sm text-gray-60 mt-2">
                <ul
                  className="
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
            </div>
          </div>

          {/* contact form */}
          <div className="mt-20 md:border md:border-gray-500 px-4 py-10 md:rounded-md">
            <form>
              <div className="form__group md:grid md:grid-cols-2 md:gap-4 border border-gray-500 px-4 py-10">
                <div className="item__group border-b-2 border-gray-700 pb-4 mb-4">
                  <label htmlFor="name" className="text-md font-bold text-gray-50">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="block mt-6 px-6 py-2 bg-[#1D232A] focus:outline-none w-full "
                  />
                </div>
                <div className="item__group border-b-2 border-gray-700 pb-4 mb-4">
                  <label htmlFor="email" className="text-md font-bold text-gray-50">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="name"
                    id="name"
                    placeholder="Email address"
                    className="block mt-6 px-6 py-2 bg-[#1D232A] focus:outline-none w-full "
                  />
                </div>

                <div className="item__group border-b-2 border-gray-700 pb-4 mb-4">
                  <label htmlFor="phone" className="text-md font-bold text-gray-50">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone number"
                    className="block mt-6 px-6 py-2 bg-[#1D232A] focus:outline-none w-full "
                  />
                </div>
                <div className="item__group border-b-2 border-gray-700 pb-4 mb-4">
                  <label htmlFor="subject" className="text-md font-bold text-gray-50">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="name"
                    placeholder="Type Subject"
                    className="block mt-6 px-6 py-2 bg-[#1D232A] focus:outline-none w-full "
                  />
                </div>
              </div>
              <div className="border border-gray-500 px-4 py-10">
                <div className="item__group mt-4 border-b-2 border-gray-700 pb-4">
                  <label htmlFor="message" className="text-md font-bold text-gray-50">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="block w-full mt-6 px-6 py-6 bg-[#1D232A] focus:outline-none "
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="flex items-center gap-4 mt-10">
                  <input type="checkbox" name="checkbox" id="" />
                  <p>I have read the terms of the Service & I accept Privacy Policy</p>
                </div>
                <div className="flex justify-center mt-8">
                  <button className="w-full  bg-blue-700 px-5 py-2 rounded-md text-gray-50">
                    Send message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
