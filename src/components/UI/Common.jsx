/* eslint-disable react/prop-types */
const Common = ({ title, description, soustitle }) => {
  return (
    <>
      <div className="relative">
        <h2 className="text-blue-600 opacity-20 md:text-[95px] text-[40px] text-center uppercase pt-[118px] font-bold">
          {title}
        </h2>
        <div
          className="w-full max-w-[620px] h-[252px]
                     top-[146px]
                     mx-auto absolute -translate-x-1/2  left-1/2 lg:top-[191px]"
        >
          <h3
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="text-gray-200 text-center font-bold pb-6 text-[2rem] px-9

                    lg:text-[50px]
                    lg:px-0
                    md:pt-11
                    md:text-[40px]

                    "
          >
            {soustitle}
          </h3>
          <p className="text-center text-[16px] text-gray-700 ">{description}</p>
        </div>
      </div>
    </>
  );
};
export default Common;
