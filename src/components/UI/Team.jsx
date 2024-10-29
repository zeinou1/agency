import Team1 from "../../assets/img/Team1.png";
import Team2 from "../../assets/img/Team2.png";
import Team3 from "../../assets/img/Team3.png";
import Common from "./Common.jsx";

const Team = () => {
  return (
    <section id= "team" className="mb-0  pb-3.5">
      <div className="px-4 max-w-7xl mx-auto md:px-12 overflow-hidden">
        {/*    Our Team*/}
        <div className="relative">
          <div className="feature">
            <Common
              title={"Our Team"}
              soustitle={"Meet With Our Creative Dedicated Team"}
              description={
                "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus."
              }
            />
          </div>
        </div>
        <div
          className="
                   flex flex-col items-center justify-center
                   grid-cols-1
                   gap-10
                   mt-[120px]
                   sm:grid
                   sm:grid-cols-2
                   lg:grid lg:grid-cols-menu lg:items-center lg:justify-center lg:gap-5
                   lg:mt-[110px]
                   md:mt-[170px]
                "
        >
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="200"
            className="card text-center  sm:px-0 md:max-w-lg"
          >
            <div className="rounded-sm ">
              <img src={Team1} alt="" className=" " />
            </div>
            <h2 className="text-[24px] font-bold text-white pt-4">Olivia Andrium</h2>
            <p className="text-[16px] text-gray-400 md:mb-8">Project Manager</p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
            className="card text-center sm:px-0 "
            
          >
            <div className="rounded-sm ">
              <img src={Team2} alt="" className="" />
            </div>
            <h2 className="text-[24px] font-bold text-white pt-4">Olivia Andrium</h2>
            <p className="text-[16px] text-gray-400 md:mb-8">Project Manager</p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="400"
            className="card text-center sm:px-0 "
          >
            <div className="rounded-sm ">
              <img src={Team3} alt="" className="" />
            </div>
            <h2 className="text-[24px] font-bold text-white pt-4">Olivia Andrium</h2>
            <p className="text-[16px] text-gray-400 md:mb-8">Project Manager</p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="500"
            className="card text-center  sm:px-0 "
          >
            <div className="rounded-sm ">
              <img src={Team3} alt="" className="" />
            </div>
            <h2 className="text-[24px] font-bold text-white pt-4">Olivia Andrium</h2>
            <p className="text-[16px] text-gray-400 md:mb-8">Project Manager</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
