import {portfolio} from "../../assets/data/portfoliodata.js";

import {useEffect, useState} from "react";


const Portfolio = () => {
    const [portfolios, setPortfolios] = useState(portfolio)
    console.log(
        portfolios
    )
    const [showfilter, setShowfilter] = useState("all")
    useEffect(() => {
      if (showfilter  === "all") {
          setPortfolios(portfolio)
      }
      if(showfilter === "Web Design") {
          const designFilter = portfolio.filter(item => item.category === "Web Design")
          setPortfolios(designFilter)
      }
      if(showfilter ==="video"){
          const videoFilter= portfolio.filter((item) =>item.category==="video")
          setPortfolios(videoFilter)
      }
      if(showfilter==="multimedia") {
          const multiFilter= portfolio.filter(item => item.category==="multimedia")
          setPortfolios(multiFilter)
      }
    }, [showfilter]);
    return (
        <section id="portfolio" className="max-w-7xl px-[50px] mb-0  pb-3.5"  >
            <div className=" md:max-w-7xl pt-[50] mx-auto">

                {/*    Our Team*/}
                <div className="relative">
                    <div className="team">

                        <h2 className="text-blue-600 opacity-20 md:text-[95px] text-[40px] text-center uppercase pt-[118px] font-bold">portfolio</h2>
                        <div
                            className="w-full max-w-[620px] h-[252px]
                     top-[146px]
                     mx-auto absolute -translate-x-1/2  left-1/2 lg:top-[191px]">
                            <h3 className="text-gray-200 text-center font-bold pb-6 text-[2rem] px-9

                    lg:text-[50px]
                    lg:px-0
                    md:pt-11
                    md:text-[40px]">Explore Our Latest Case Studies</h3>
                            <p className="text-center text-[16px] text-gray-700">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="lg:mt-[70px] pt-28 flex items-center justify-center">
                    <div
                        className=" flex flex-wrap items-center justify-center lg:flex lg:items-center lg:justify-center gap-3 mt-32">
                        <button
                            className="py-2 px-4 rounded-[8px] text-gray-50 lg:text-lg cursor-pointer z-20"
                            onClick={() => setShowfilter("all")}

                        >
                            All
                        </button>
                        <button
                            className="py-2 px-4 rounded-[8px] text-white lg:text-lg cursor-pointer z-20"
                            onClick={()=>setShowfilter("Web Design")}
                        >

                            Branding Strategy

                        </button>
                        <button
                            className="py-2 px-4 rounded-[8px] text-white lg:text-lg cursor-pointer z-20"
                            onClick={()=> setShowfilter("video")}
                        >
                            Digital Experiences

                        </button>
                        <button
                            className="py-2 px-4 rounded-[8px] text-white lg:text-lg cursor-pointer z-20"
                            onClick={()=> setShowfilter("multimedia")}

                        >
                            eCommerce
                        </button>
                    </div>
                </div>

                {/*       Display data portfolio */}
                <div className="max-w-fit flex flex-col px-4 items-center justify-center gap-3.5 mt-16 md:grid md:grid-cols-3 md:items-center md:justify-center sm:grid sm:grid-cols-2 mx-auto">

                    {portfolios.map((data, index) => (

                        <div
                            key={index}
                            className={`${
                                index === 0
                                    ? " lg:col-span-2  md:col-span-2  relative group overflow-hidden sm:px-6  md:px-0 "
                                    : index === 1
                                        ? "  row-span-2 lg:col-span-1 relative group py-6"
                                        : index === 2 || index === 3
                                            ? "relative group "
                                            : ""
                            }`}>
                            <img
                                src={data.imgUrl}
                                alt={`Image ${index + 1}`}
                                className=""
                            />

                            <div
                                className=" pl-6 bg-opacity-40  absolute top-11 left-0 z-[5] hidden group-hover:block ease-in duration-200">
                                <div className="text-white pl-6  bg-gray-500 rounded-lg">
                                    <button className="p-3 flex items-center justify-center ">
                                        <div className="  flex flex-col pr-2 border-r-2 border-r-white">
                                            <span className="text-lg font-semibold"> {data.title}</span>
                                            <span> {data.category}</span>
                                        </div>
                                        <span className="text-xl pl-4">

                                        <i className="ri-arrow-right-line"></i>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>

                    ))}

                </div>

            </div>
            <div
                className="text-center mt-11">

                <button className="text-lg font-semibold text-white bg-blue-600 py-5 px-11 rounded-lg ">

                    <span className=" "> Moore projet</span>
                    <span className="text-xl pl-4">
                                        <i className="ri-arrow-right-line"></i>
                                        </span>
                </button>
            </div>
        </section>

    );
};

export default Portfolio;