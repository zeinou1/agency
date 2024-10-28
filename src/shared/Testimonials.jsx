import ava01 from "../assets/img/Team1.png";
import ava02 from "../assets/img/Team2.png";
import ava03 from "../assets/img/Team3.png";
import { useRef } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
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
      <div className="slider-container md:max-w-7xl px-[50px] mx-auto relative mb-10">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          <div key={1}>
            <div className="md:flex md:gap-[73px]  md:items-center md:justify-between">
              <div className="md:w-1/2 ">
                <p className="text-gray-50 leading-9 text-[18px] font-[400] pl-4">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  condimentum sapien ac leo cursus dignissim. In ac lectus vel orci
                  accumsan ultricies at in libero accumsan Lorem Ipsum has been the
                  industry s standard
                </p>
              </div>
              <div className="md:w-1/2 md:mt-36 w-full">
                <figure>
                  <img
                    src={ava01}
                    alt=""
                    className="w-full max-w-[380px] object-contain"
                  />
                </figure>
              </div>
            </div>
            <div className=" pl-4 -mt-36">
              <h3 className="text-[20px] font-[400] text-gray-100">Deyal Shifer</h3>
              <p className="text-[18px] font-[400] leading-9 text-gray-600">
                Founder @democompany.
              </p>
            </div>
          </div>
          <div key={2}>
          <div className="flex gap-[73px]  items-center justify-between">
              <div className="w-1/2 ">
                <p className="text-gray-50 leading-9 text-[18px] font-[400] pl-4">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  condimentum sapien ac leo cursus dignissim. In ac lectus vel orci
                  accumsan ultricies at in libero accumsan Lorem Ipsum has been the
                  industry s standard
                </p>
              </div>
              <div className="w-1/2 mt-36">
                <figure>
                  <img
                    src={ava02}
                    alt=""
                    className="w-full max-w-[380px] object-contain"
                  />
                </figure>
              </div>
            </div>
            <div className=" pl-4 -mt-36">
              <h3 className="text-[20px] font-[400] text-gray-100">Deyal Shifer</h3>
              <p className="text-[18px] font-[400] leading-9 text-gray-600">
                Founder @democompany.
              </p>
            </div>
          </div>
          <div key={3}>
          <div className="flex gap-[73px]  items-center justify-between">
              <div className="w-1/2 ">
                <p className="text-gray-50 leading-9 text-[18px] font-[400] pl-4">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  condimentum sapien ac leo cursus dignissim. In ac lectus vel orci
                  accumsan ultricies at in libero accumsan Lorem Ipsum has been the
                  industry s standard
                </p>
              </div>
              <div className="w-1/2 mt-36">
                <figure>
                  <img
                    src={ava03}
                    alt=""
                    className="w-full max-w-[380px] object-contain "
                  />
                </figure>
              </div>
            </div>
            <div className=" pl-4 -mt-36">
              <h3 className="text-[20px] font-[400] text-gray-100">Deyal Shifer</h3>
              <p className="text-[18px] font-[400] leading-9 text-gray-600">
                Founder @democompany.
              </p>
            </div>
          </div>
        </Slider>

        <div className="text-center mt-[20px] absolute left-16  ">
          <button className="button mr-7" onClick={previous}>
            <span className="w-5 h-5  bg-blue-400 rounded-full flex items-center justify-center p-4">
              <i className="ri-arrow-left-line text-gray-50 text-xl font-bold hover:text-gray-900 transition-all duration-300 ease-in-out"></i>
            </span>
          </button>
          <button className="button" onClick={next}>
            <span className='w-5 h-5  bg-blue-400 rounded-full flex items-center justify-center p-4'>
              <i className="ri-arrow-right-line text-gray-50 text-xl font-bold hover:text-gray-900 transition-all duration-300 ease-in-out"></i>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
export default Testimonials;
