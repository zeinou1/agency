import hero1 from "../../assets/img/img_1.png"
import hero2 from "../../assets/img/img.png"
import {Typewriter} from "react-simple-typewriter";
function Hero() {
  return (
    <section
      id="home"
      className="mb-0  bg-no-repeat bg-cover relative pt-9 "
    >
      <div className="px-4 max-w-7xl mx-auto md:px-12 overflow-hidden">
        <div className="flex flex-col gap-10 mt-3 lg:flex-row lg:gap-10 pb-36">
          <div className="lg:w-1/2 lg:order-1  pt-[106px] lg:pr-[3.5rem] lg:flex lg:flex-col lg:gap-10">
            <div
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex items-center justify-center lg:block"
            >
              <button className="bg-gray-600 py-2.5 px-6 rounded-l-full rounded-r-full flex gap-2 items-center justify-center ">
                <span className="w-2 h-2 rounded-full bg-blue-700"></span>
                <span className="text-md text-white">
                  {" "}
                  TailWind Template for Startups
                </span>
              </button>
            </div>
            <div className="flex flex-col gap-5 mt-6">
              <h1
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="300"
                className="text-white  font-bold
                              text-center
                              text-[30px]
                              lg:text-[40px]
                              lg:text-left
                         "
              >
                Digital solution for Your  <Typewriter
                        words={["Digital", "Seo"]}
                        loop
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
              </h1>
              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="400"
                className="text-gray-400 text-center
                        lg:text-left

                        "
              >
                Handcrafted Tailwind CSS template for your next - Startup, Business,
                Agency or SaaS Website. Comes with refreshing design and everything you
                need to kickstart your next web project.
              </p>
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="500"
                className="text-white flex flex-col items-center gap-2
                             mt-6
                             lg:flex
                             lg:flex-row
                             lg:gap-2
                             lg:items-center
                             "
              >
                <button className="bg-[#4A6CF7] py-3 px-8 rounded-md flex items-center justify-center gap-2">
                  <span>Get Started</span>
                  <span className="text-xl">
                    <i className="ri-arrow-right-line"></i>
                  </span>
                </button>
                <button className="text-white flex items-center justify-center ">
                  <span>
                    <a href="#" className="text-4xl">
                      {" "}
                      <i className="ri-arrow-right-s-fill"></i>
                    </a>
                  </span>
                  <span className="text-[16px]">
                    <a href="#">How it Work</a>
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="200"
            className="relative w-full  lg:w-1/2 order-1 px-5 
            
            "
          >
            <div className="h-[520px] w-full  overflow-hidden lg:static sm:pl-36 lg:pl-0    ">
              <img
                src={hero1}
                alt="heroimg"
                className=" bg-no-repeat bg-cover  "
              />
            </div>

            <div className="w-[395px] absolute top-[140px] lg:-left-[60px] h-[420px] md:w-full overflow-hidden z-20 
            
            ">
              <img
                src={hero2}
                alt="heroimg2"
                className="w-full 
              
                md:max-w-[350px]
                
                
                md:bg-white/30 md:backdrop-blur-sm md:border md:border-white/20  md:pr-6 md:pt-5  "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
