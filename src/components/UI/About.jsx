import { useEffect, useRef, useState } from "react";
import Common from "./Common.jsx";
import imgabout from "../../assets/img/about-1.jpg"
import abouUs from "../../assets/img/about-2.jpg"
const About = () => {
  const buttonRefs = useRef([]);

  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    // Fonction appelée lors du clic sur un bouton
    const handleClick = (index) => {
      setActiveButton(index);
      console.log(`Button ${index + 1} clicked!`);
    };

    // Ajouter les event listeners sur chaque bouton
    buttonRefs.current.forEach((button, index) => {
      if (button) {
        button.addEventListener("click", () => handleClick(index));
      }
    });

    // Nettoyage lors du démontage du composant
    return () => {
      buttonRefs.current.forEach((button, index) => {
        if (button) {
          button.removeEventListener("click", () => handleClick(index));
        }
      });
    };
  }, []);

  return (
    <section id="about" className=" mb-0  pb-3.5">
      <div id="about" className="px-4 max-w-7xl mx-auto md:px-12 overflow-hidden">
        <div className="about">
          <Common
            title={"ABOUT US"}
            soustitle={"Know Details About Our Company"}
            description={
              "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros.Donec vitae tortor lacus. Phasellus aliquam ante in maximus.."
            }
          />
        </div>

        <div className="pt-[250px] grid grid-cols-menu px-7">
          <button className="text-white text-[16px]  pb-[31px] border-b-2 border-b-gray-700 hover:border-b-blue-700">
            About Us
          </button>
          <button className="text-white text-[16px]  pb-[31px] border-b-2 border-b-gray-700 hover:border-b-blue-700">
            Our Mission
          </button>
          <button className="text-white text-[16px]  pb-[31px] border-b-2 border-b-gray-700 hover:border-b-blue-700">
            Our vision
          </button>
        </div>
        {/*    Next */}
        <div className="about mt-[70px]">
          <div className="flex flex-col gap-10 mt-3 lg:flex-row lg:gap-10 pb-36">
            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="lg:w-1/2 lg:order-2 order-2  mt-9"
            >
              <div className="w-full flex flex-col gap-5 mt-6">
                <h1 className="text-white text-center lg:text-[40px] font-bold text-[20px]  md:text-left ">
                  We are Creative Digital Agency Based in USA
                </h1>
                <p className="text-gray-400 text-center md:text-left ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  condimentum sapien ac leo cursus dignissim. In ac lectus vel orci
                  accumsan ultricies at in libero accumsan.
                </p>
                <p className="text-gray-400 text-center md:text-left ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  condimentum sapien ac leo cursus dignissim. In ac lectus vel orci
                  accumsan ultricies at in libero accumsan.
                </p>
                <p className="text-gray-400 text-center md:text-left ">
                  Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis nulla.
                  Integer vitae magna lacus. Sed venenatis auctor dolor. Phasellus ex
                  massa, facilisis ac vestibulum eget, ultrices quis nulla. Integer vitae
                  magna lacus. Sed venenatis auctor dolor.
                </p>
              </div>
            </div>

            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="relative   lg:w-1/2 lg:order-1  "
            >
              <div className="img1 h-[520px] w-full md:max-w-[344px]  overflow-hidden lg:static sm:pr-14 md:pr-0 ">
                <img
                  src={imgabout}
                  alt="img about"
                  className="w-full object-cover bg-cover bg-no-repeat "
                />
              </div>
              <div
                className="img2 absolute left-[200px] top-[103px]  md:top-[70px]  h-[420px]  overflow-hidden z-20
                               lg:translate-x-0
                               lg:left-[130px]
                               md:left-[272px]
                               xl:left-[260px]
                               sm:left-[200px]
                               "
              >
                <img
                  src={abouUs}
                  alt=""
                  className="w-full lg:max-w-[350px] object-cover bg-cover bg-no-repeat bg-white/30 backdrop-blur-sm border border-white/20  pr-6 pt-5   "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
