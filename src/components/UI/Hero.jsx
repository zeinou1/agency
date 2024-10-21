function Hero() {
    return (<section className="max-w-7xl px-[50px] mb-0 bg-[url('../../assets/img/acc.jpg')] bg-no-repeat bg-cover relative pt-9 " >
        <div className='md:max-w-7xl'>
            <div className="flex flex-col gap-10 mt-3 lg:flex-row lg:gap-10 pb-36">
                <div className="lg:w-1/2 lg:order-1  pt-[106px] lg:pr-[3.5rem] lg:glex lg:flex-col lg:gap-10">
                    <div className="flex items-center justify-center lg:block">
                        <button
                            className='bg-gray-600 py-2.5 px-6 rounded-l-full rounded-r-full flex gap-2 items-center justify-center '>
                            <span className="w-2 h-2 rounded-full bg-blue-700"></span>
                            <span className="text-md text-white"> TailWind Template for Startups</span>
                        </button>
                    </div>
                    <div className="flex flex-col gap-5 mt-6">
                        <h1 className="text-white  font-bold
                              text-center
                              text-[30px]
                              lg:text-[40px]
                              lg:text-left
                         ">
                            Digital solution for Your text
                        </h1>
                        <p className="text-gray-400 text-center
                        lg:text-left

                        ">
                            Handcrafted Tailwind CSS template for your next - Startup, Business,
                            Agency or SaaS Website. Comes with refreshing design and everything
                            you need to kickstart your next web project.
                        </p>
                        <div
                            className="text-white flex flex-col items-center gap-2
                             mt-6
                             lg:flex
                             lg:flex-row
                             lg:gap-2
                             lg:items-center
                             ">
                            <button className="bg-[#4A6CF7] py-3 px-8 rounded-md flex items-center justify-center gap-2">
                                    <span>
                                        Get Started
                                    </span>
                                <span className="text-xl"><i className="ri-arrow-right-line"></i></span>
                            </button>
                            <button className="text-white flex items-center justify-center ">
                                    <span><a href="#" className="text-4xl"> <i
                                        className="ri-arrow-right-s-fill"></i></a>
                                    </span>
                                <span className="text-[16px]">
                                    <a href="#">How it Work</a>
                                    </span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="relative   lg:w-1/2 order-1 px-5 glass-effect ">
                    <div className="h-[520px] w-full  overflow-hidden lg:static sm:pl-36 lg:pl-0 ">
                        <img src="src/assets/img/img_1.png" alt="" className=" bg-no-repeat bg-cover  "/>
                    </div>
                    <div className="absolute top-[140px] lg:-left-[60px] h-[420px] w-full  overflow-hidden z-20 ">

                        <img src="src/assets/img/img.png" alt="" className="w-full max-w-[350px] "/>

                    </div>
                </div>
            </div>
        </div>

    </section>);
}

export default Hero;