import Team1 from "../../assets/img/Team1.png";
import Team2 from "../../assets/img/Team2.png";
import Team3 from "../../assets/img/Team3.png";


const Team = () => {
    return (
        <section className="bg-gradient-to-r from-gray-950 to-[#111722] pb-3.5">
            <div className="container md:max-w-7xl">

                {/*    Our Team*/}
                <div className="relative">
                    <div className="team">

                        <h2 className="text-blue-600 opacity-20 md:text-[95px] text-[40px] text-center uppercase pt-[118px] font-bold">Our
                            Team</h2>
                        <div
                            className="w-full max-w-[620px] h-[252px]
                     top-[146px]
                     mx-auto absolute -translate-x-1/2  left-1/2 lg:top-[191px]">
                            <h3 className="text-gray-200 text-center font-bold pb-6 text-[2rem] px-9

                    lg:text-[50px]
                    lg:px-0
                    md:pt-11
                    md:text-[40px]">Meet With Our Creative
                                Dedicated Team</h3>
                            <p className="text-center text-[16px] text-gray-700">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros.
                                Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="

                   grid-cols-1
                   gap-10
                   mt-[220px]
                   sm:grid
                   sm:grid-cols-2
                   lg:grid lg:grid-cols-menu items-center justify-center lg:gap-5
                   lg:mt-[270px]
                   md:mt-[270px]
                ">
                    <div className="card text-center px-20 sm:px-0">
                        <div className="rounded-sm ">
                            <img src={Team1} alt="" className=""/>
                        </div>
                        <h2 className="text-[24px] font-bold text-white pt-4">Olivia Andrium</h2>
                        <p className="text-[16px] text-gray-400 mb-8">Project Manager</p>
                    </div>

                    <div className="card text-center px-20 sm:px-0">
                        <div className="rounded-sm ">
                            <img src={Team2} alt="" className=""/>
                        </div>
                        <h2 className="text-[24px] font-bold text-white pt-4">Olivia Andrium</h2>
                        <p className="text-[16px] text-gray-400 mb-8">Project Manager</p>
                    </div>


                    <div className="card text-center px-20 sm:px-0 ">
                        <div className="rounded-sm ">
                            <img src={Team3} alt="" className=""/>
                        </div>
                        <h2 className="text-[24px] font-bold text-white pt-4">Olivia Andrium</h2>
                        <p className="text-[16px] text-gray-400 mb-8">Project Manager</p>
                    </div>
                    <div className="card text-center px-20 sm:px-0 ">
                        <div className="rounded-sm ">
                            <img src={Team3} alt="" className=""/>
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