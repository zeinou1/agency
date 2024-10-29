import checked from "../assets/img/checked.svg";
import GRY from "../assets/img/graygrids-2.svg.svg";
import LINE from "../assets/img/lineicons-2.svg.svg";
import PLAI from "../assets/img/plainadmin-2.svg.svg";
import TAI from "../assets/img/tailadmin-2.svg.svg";
import UIDK from "../assets/img/uideck-2.svg.svg";
import About from "../components/UI/About";
import Common from "../components/UI/Common";
import FeaturesList from "../components/UI/FeaturesList";
import Hero from "../components/UI/Hero";
import Portfolio from "../components/UI/Portfolio";
import Team from "../components/UI/Team";
import Testimonials from "../shared/Testimonials";
import article1 from "../assets/img/article1.png";
import article2 from "../assets/img/article2.png";
import article3 from "../assets/img/article3.png";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <section className="">
        <div className="main">
          <Hero />
          <FeaturesList />
          <About />
          <Team />
          <Portfolio />
        </div>
      </section>
      {/* Testimonial */}
      <section id="testimonial">
        <Common
          title="Testimonial"
          soustitle="Testimonial"
          description=" Handcrafted Tailwind CSS template for your next - Startup, Business, Agency or SaaS Website. Comes with refreshing design and everything you need to kickstart your next web project."
        />

        <div className="pt-[66px]">
          <div className="mb-6">
            <Testimonials />
          </div>
        </div>
        <div className="mx-auto mt-36">
          <h3 className="text-[36px] text-gray-50 font-semibold  leading-8 text-center">
            {" "}
            Trusted by Global Brands
          </h3>
          <p className="text-[#79808A] text-[16px] font-[400] text-center mt-4 lg:w-[594px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor
            eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
          </p>
        </div>
        <div className="wrapper mt-[50px]">
          <div className="content 
           flex items-center justify-center gap-5 flex-wrap
           sm:flex sm:items-center sm:justify-center sm:flex-wrap sm:gap-8">
            <img src={UIDK} alt="" className="text-gray-50" />
            <img src={TAI} alt="" />
            <img src={GRY} alt="" />
            <img src={LINE} alt="" />
            <img src={PLAI} alt="" />
          </div>
        </div>
      </section>

      <section id="pricing">
        <div className="px-4 max-w-7xl mx-auto md:px-12 overflow-hidden">
          <Common
            title="Pricing plans"
            soustitle="Affordable Pricing With Simple Plans"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus."
          />
        </div>
        <div className="pricing__wrapper mt-[300px] ">
          <div className="pricing__content  md:flex md:flex-row md:items-center  md:justify-center flex flex-col items-center justify-center">
            <div className="free__plan flex flex-col  min-h-[450px]  w-[369px] h-full  rounded-lg mt-5 py-6 text-left  max-w-[328.46px]">
              <div className="border-b border-gray-700">
                <h3 className="text-[36px] text-gray-50 text-center  leading-8">Free</h3>
                <p className="text-sm text-gray-50 text-center mt-4 mb-8">
                  The most basic plan
                </p>
              </div>
              <div className="price flex flex-col items-center justify-center gap-5 md:border-b md:border-gray-700 text-center px-5 pt-[40px] pb-[40px]">
                <span className="text-sm font-bold text-center text-gray-50">
                  {" "}
                  $ 10 / <span>month</span>
                </span>
                <p className="text-sm">
                  Lorem ipsum dolor sit ametion consectetur adipisc elit.
                </p>
              </div>
              <div className="features flex flex-col mt-[40px] items-center justify-center  px-[36px]">
                <ul className="flex flex-grow flex-col flex-shrink-0">
                  <li className=" flex space-x-3 items-center gap-2">
                    <img src={checked} alt="" className="h-5 w-5 flex-shrink-0 " />
                    <span>300 GB Storage</span>
                  </li>
                  <li className=" flex space-x-3 items-center gap-2 py-3">
                    <img src={checked} alt="" className="flex-shrink-0 h-5 w-5" />
                    <span>Unlimited Photos and Videos</span>
                  </li>
                  <li className=" flex space-x-3 items-center gap-2 py-3">
                    <img src={checked} alt="" className="flex-shrink-0 h-5 w-5" />
                    <span>Exclusive Support</span>
                  </li>
                  <li className=" flex space-x-3 items-center gap-2">
                    <img src={checked} alt="" className="flex-shrink-0 h-5 w-5" />
                    <span>Custom Branding Strategy</span>
                  </li>
                  <li className=" flex space-x-3 items-center gap-2 py-3">
                    <img src={checked} alt="" className="flex-shrink-0 h-5 w-5" />
                    <span>Free SEO Tools</span>
                  </li>
                  <li className="flex mt-8 items-center justify-center space-x-3 py-2  bg-gray-50 rounded-md ">
                    <a href="/pricing" className="">
                      <span className="gap-3 flex items-center text-center text-gray-900">
                        <span>Join This Plan</span>

                        <span>
                          <i className="ri-arrow-right-line"></i>
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="basic__plan  max-w-[328.46px] flex flex-col  min-h-[450px]  w-[369px] h-full   mt-5  py-6 text-left md:border-l-2 md:border-gray-700">
              <div className="border-b border-gray-700">
                <h3 className="text-[36px] text-gray-50 text-center  leading-8">Basic</h3>
                <p className="text-sm text-gray-50 text-center mt-4 mb-8">
                  The most popular plan
                </p>
              </div>
              <div className="price flex flex-col items-center justify-center gap-5 border-b border-gray-700 text-center px-5 pt-[40px] pb-[40px]">
                <span className="text-sm font-bold text-center text-gray-50">
                  {" "}
                  $ 90 / <span>month</span>
                </span>
                <p className="text-sm">
                  Lorem ipsum dolor sit ametion consectetur adipisc elit.
                </p>
              </div>
              <div className="features flex flex-col mt-[40px] items-center px-[36px]">
                <ul className="flex flex-grow flex-col flex-shrink-0">
                  <li className=" flex space-x-3 items-center gap-2">
                    <img src={checked} alt="" className="h-5 w-5 flex-shrink-0 " />
                    <span>300 GB Storage</span>
                  </li>
                  <li className=" flex space-x-3 items-center gap-2 py-3">
                    <img src={checked} alt="" className="flex-shrink-0 h-5 w-5" />
                    <span>Unlimited Photos and Videos</span>
                  </li>
                  <li className=" flex space-x-3 items-center gap-2 py-3">
                    <img src={checked} alt="" className="flex-shrink-0 h-5 w-5" />
                    <span>Exclusive Support</span>
                  </li>
                  <li className=" flex space-x-3 items-center gap-2">
                    <img src={checked} alt="" className="flex-shrink-0 h-5 w-5" />
                    <span>Custom Branding Strategy</span>
                  </li>
                  <li className=" flex space-x-3 items-center gap-2 py-3">
                    <img src={checked} alt="" className="flex-shrink-0 h-5 w-5" />
                    <span>Free SEO Tools</span>
                  </li>
                  <li className="mt-8 flex items-center justify-center space-x-3 py-2  bg-blue-600 rounded-md ">
                    <a href="/pricing" className="">
                      <span className="gap-3 flex items-center text-center text-gray-50">
                        <span>Join This Plan</span>

                        <span>
                          <i className="ri-arrow-right-line"></i>
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="premium__plan  max-w-[328.46px] flex flex-col min-h-[450px]   w-[369px] h-full   mt-5  py-6 md:border-l-2 md:border-gray-700 text-left">
              <div className="border-b border-gray-700">
                <h3 className="text-[36px] text-gray-50 text-center  leading-8">
                  Premium
                </h3>
                <p className="text-sm text-gray-50 text-center mt-4 mb-8">
                  The most premium plan
                </p>
              </div>
              <div className="price flex flex-col items-center justify-center gap-5 border-b border-gray-700 text-center px-5 pt-[40px] pb-[40px]">
                <span className="text-sm font-bold text-center text-gray-50">
                  {" "}
                  $ 200 / <span>month</span>
                </span>
                <p className="text-sm">
                  Lorem ipsum dolor sit ametion consectetur adipisc elit.
                </p>
              </div>
              <div className="features flex flex-col mt-[40px] items-center px-[36px]">
                <ul className="flex flex-grow flex-col flex-shrink-0">
                  <li className=" flex space-x-3 items-center gap-2">
                    <img src={checked} alt="" className="h-5 w-5 flex-shrink-0 " />
                    <span>300 GB Storage</span>
                  </li>
                  <li className=" flex space-x-3 items-center gap-2 py-3">
                    <img src={checked} alt="" className="flex-shrink-0 h-5 w-5" />
                    <span>Unlimited Photos and Videos</span>
                  </li>
                  <li className=" flex space-x-3 items-center gap-2 py-3">
                    <img src={checked} alt="" className="flex-shrink-0 h-5 w-5" />
                    <span>Exclusive Support</span>
                  </li>
                  <li className=" flex space-x-3 items-center gap-2">
                    <img src={checked} alt="" className="flex-shrink-0 h-5 w-5" />
                    <span>Custom Branding Strategy</span>
                  </li>
                  <li className=" flex space-x-3 items-center gap-2 py-3">
                    <img src={checked} alt="" className="flex-shrink-0 h-5 w-5" />
                    <span>Free SEO Tools</span>
                  </li>
                  <li className="flex mt-8 items-center justify-center space-x-3 py-2 bg-gray-50 rounded-md ">
                    <a href="/pricing" className="">
                      <span className="gap-3 flex items-center text-center text-gray-900">
                        <span>Join This Plan</span>

                        <span>
                          <i className="ri-arrow-right-line"></i>
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-[50px]">
            <h4 className="text-[26px] text-center font-[500] text-gray-50">
              Looking for a company solution?
            </h4>
            <p className="text-sm text-center">Contact our team to get a quote.</p>
          </div>
        </div>
      </section>

      {/* Blogs */}

      <section id="blogs" className="border-b-2 border-gray-700 mb-4  ">
        <div className="">
          <Common
            title="blogs"
            soustitle="Latest News & Articles From Our Blog"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus."
          />
        </div>
        <div className="px-4 max-w-7xl mx-auto md:px-12 overflow-hidden blogs__wrapper mt-[250px] ">
          <div className="blogs__content ">
            <div
              className="blogs__group 
            
            flex flex-col items-center justify-center
            md:flex md:flex-row md:items-center md:justify-center md:flex-wrap md:gap-10
         "
            >
              <div className="blogs__item-1 relative md:w-[346px] max-h-auto mb-3">
                <img src={article1} alt="article1" className="w-[400px] md:w-full" />
                <div className="flex items-center gap-5 mt-4">
                  <div className="">
                    <span className="pr-3 text-gray-300 text-sm">
                      <i className="ri-user-line"></i>
                    </span>
                    <span>Abdoul</span>
                  </div>
                  <div>
                    <span className="pr-3 text-gray-300 text-sm">
                      <i className="ri-calendar-line"></i>
                    </span>
                    <span>25 Dec, 2024</span>
                  </div>
                </div>
                <p className="absolute top-2 left-4 bg-blue-500 px-2 py-1 rounded-sm text-gray-50">
                  Online Busines
                </p>
              </div>

              <div className="blogs__item-2 relative md:w-[346px] max-h-auto mb-3">
                <img src={article2} alt="article1" className="w-[400px] md:w-full"/>
                <div className="flex items-center gap-5 mt-4">
                  <div className="">
                    <span className="pr-3 text-gray-300 text-sm">
                      <i className="ri-user-line"></i>
                    </span>
                    <span>Abdoul</span>
                  </div>
                  <div>
                    <span className="pr-3 text-gray-300 text-sm">
                      <i className="ri-calendar-line"></i>
                    </span>
                    <span>25 Dec, 2024</span>
                  </div>
                </div>
                <p className="absolute top-2 left-4 bg-blue-500 px-2 py-1 rounded-sm text-gray-50">
                  Online Busines
                </p>
              </div>

              <div className="blogs__item-3 relative md:w-[346px] max-h-auto mb-3">
                <img src={article3} alt="article1" className="w-[400px] md:w-full" />
                <div className="flex items-center gap-5 mt-4">
                  <div className="">
                    <span className="pr-3 text-gray-300 text-sm">
                      <i className="ri-user-line"></i>
                    </span>
                    <span>Abdoul</span>
                  </div>
                  <div>
                    <span className="pr-3 text-gray-300 text-sm">
                      <i className="ri-calendar-line"></i>
                    </span>
                    <span>25 Dec, 2024</span>
                  </div>
                </div>
                <p className="absolute top-2 left-4 bg-blue-500 px-2 py-1 rounded-sm text-gray-50">
                  Online Busines
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <section  className=" mt-32 ">
        <div className="px-4 max-w-7xl mx-auto md:px-12 overflow-hidden lg:flex lg:gap-10 lg:justify-between ">
          <div>
            <h6 className="text-center lg:text-left lg:text-2xl text-gray-50 lg:w-[60%]  ">
              Looking for a collaboration? Get Started Today!
            </h6>
            <p className="text-center mt-4 text-gray-500 lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="self-center lg:flex lg:justify-end  lg:w-[40%] mt-4">
            <button className="px-5 py-2 w-full bg-blue-600 rounded-sm  text-gray-50  md:w-[194px] ">
              {" "}
              Get Started Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
