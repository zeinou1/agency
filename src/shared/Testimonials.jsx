import { useRef } from "react";
import ava01 from "../assets/img/Team1.png";
import ava02 from "../assets/img/Team2.png";
import ava03 from "../assets/img/Team3.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const Testimonials = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="px-4 slider-replace relative mb-10 max-w-7xl mx-auto md:px-12 overflow-hidden">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          <div key={1}>
            <div
              className="flex flex-col justify-center items-center
            md:flex md:flex-row md:gap-[73px] mt-[70px]  md:items-center md:justify-between"
            >
              <div className="md:w-1/2 ">
                <p className="text-gray-50 mt-12  leading-9 text-[18px] font-[400] pl-4 text-center md:mt-0 md:text-left">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  condimentum sapien ac leo cursus dignissim. In ac lectus vel orci
                  accumsan ultricies at in libero accumsan Lorem Ipsum has been the
                  industry s standard
                </p>
              </div>
              <div className="mt-36 md:w-1/2  lg:mt-0 w-full ">
                <figure>
                  <img
                    src={ava01}
                    alt="testimonial"
                    className="w-full  md:max-w-sm object-contain"
                  />
                </figure>
              </div>
            </div>

            <div className=" pl-4 -md:mt-36">
              <h3 className="text-[20px] font-[400] text-gray-100">Deyal Shifer</h3>
              <p className="text-[18px] font-[400] leading-9 text-gray-600">
                Founder @democompany.
              </p>
            </div>
          </div>

          <div key={2}>
            <div
              className="flex flex-col justify-center items-center
            md:flex md:flex-row md:gap-[73px] mt-[70px]  md:items-center md:justify-between"
            >
              <div className="md:w-1/2 ">
                <p className="text-gray-50 mt-12  leading-9 text-[18px] font-[400] pl-4 text-center md:mt-0 md:text-left">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  condimentum sapien ac leo cursus dignissim. In ac lectus vel orci
                  accumsan ultricies at in libero accumsan Lorem Ipsum has been the
                  industry s standard
                </p>
              </div>
              <div className="mt-36 md:w-1/2  lg:mt-0 w-full ">
                <figure>
                  <img
                    src={ava02}
                    alt="testimonial"
                    className="w-full  sm:max-w-sm object-contain"
                  />
                </figure>
              </div>
            </div>

            <div className=" pl-4 -md:mt-36">
              <h3 className="text-[20px] font-[400] text-gray-100">Deyal Shifer</h3>
              <p className="text-[18px] font-[400] leading-9 text-gray-600">
                Founder @democompany.
              </p>
            </div>
          </div>
          <div key={3}>
            <div
              className="flex flex-col justify-center items-center 
            md:flex md:flex-row md:gap-[73px] mt-[70px]  md:items-center md:justify-between"
            >
              <div className="md:w-1/2 ">
                <p className="text-gray-50 mt-12  leading-9 text-[18px] font-[400] pl-4 text-center md:mt-0 md:text-left">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  condimentum sapien ac leo cursus dignissim. In ac lectus vel orci
                  accumsan ultricies at in libero accumsan Lorem Ipsum has been the
                  industry s standard
                </p>
              </div>
              <div className="mt-36 md:w-1/2  lg:mt-0 w-full ">
                <figure>
                  <img
                    src={ava03}
                    alt="testimonial"
                    className="w-full  sm:max-w-sm object-contain"
                  />
                </figure>
              </div>
            </div>

            <div className=" pl-4 -md:mt-36">
              <h3 className="text-[20px] font-[400] text-gray-100">Deyal Shifer</h3>
              <p className="text-[18px] font-[400] leading-9 text-gray-600">
                Founder @democompany.
              </p>
            </div>
          </div>
        </Slider>

        <div className="text-center mt-[20px] absolute bottom-0  right-2
        
        
        ">
          <button className="button mr-7" onClick={previous}>
            <span className="w-5 h-5  bg-blue-400 rounded-full flex items-center justify-center p-4">
              <i className="ri-arrow-left-line text-gray-50 text-xl font-bold hover:text-gray-900 transition-all duration-300 ease-in-out"></i>
            </span>
          </button>
          <button className="button" onClick={next}>
            <span className="w-5 h-5  bg-blue-400 rounded-full flex items-center justify-center p-4">
              <i className="ri-arrow-right-line text-gray-50 text-xl font-bold hover:text-gray-900 transition-all duration-300 ease-in-out"></i>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
export default Testimonials;
