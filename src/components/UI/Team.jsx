import Team1 from "../../assets/img/Team1.png";
import Team2 from "../../assets/img/Team2.png";
import Team3 from "../../assets/img/Team3.png";
import Common from "./Common.jsx";

const Team = () => {
  return (
    <section className="max-w-7xl px-[50px] mb-0 bg-gradient-to-r from-gray-950 to-[#111722] pb-3.5">
      <div className="container md:max-w-7xl">
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

                   grid-cols-1
                   gap-10
                   mt-[220px]
                   sm:grid
                   sm:grid-cols-2
                   lg:grid lg:grid-cols-menu items-center justify-center lg:gap-5
                   lg:mt-[270px]
                   md:mt-[270px]
                "
        >
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="200"
            className="card text-center px-20 sm:px-0"
          >
            <div className="rounded-sm ">
              <img src={Team1} alt="" className="" />
            </div>
            <h2 className="text-[24px] font-bold text-white pt-4">Olivia Andrium</h2>
            <p className="text-[16px] text-gray-400 mb-8">Project Manager</p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
            className="card text-center px-20 sm:px-0"
          >
            <div className="rounded-sm ">
              <img src={Team2} alt="" className="" />
            </div>
            <h2 className="text-[24px] font-bold text-white pt-4">Olivia Andrium</h2>
            <p className="text-[16px] text-gray-400 mb-8">Project Manager</p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="400"
            className="card text-center px-20 sm:px-0 "
          >
            <div className="rounded-sm ">
              <img src={Team3} alt="" className="" />
            </div>
            <h2 className="text-[24px] font-bold text-white pt-4">Olivia Andrium</h2>
            <p className="text-[16px] text-gray-400 mb-8">Project Manager</p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="500"
            className="card text-center px-20 sm:px-0 "
          >
            <div className="rounded-sm ">
              <img src={Team3} alt="" className="" />
            </div>
            <h2 className="text-[24px] font-bold text-white pt-4">Olivia Andrium</h2>
            <p className="text-[16px] text-gray-400 mb-8">Project Manager</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
