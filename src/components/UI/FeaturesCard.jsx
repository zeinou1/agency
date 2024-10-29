const FeaturesCard = ({item}) => {
const {title,description,icon} = item

    return (
        <>
            <div className=" flex flex-col  mx-auto">

                <div 
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="200"
                className=" px-6">
                    <div className="text-center flex flex-col items-center justify-center gap-9 mt-9">
                        <span
                            className="w-[90px] h-[90px] rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600  ">
                              <img src={icon} alt="features logo" className="max-w-[40px]"/>
                        </span>
                        <h4 className="text-md text-center text-white lg:text-[24px]">{title}</h4>
                        <p className="text-sm text-center  lg:text-[16px] leading-6 text-gray-600 ">{description}</p>
                    </div>
                </div>

            </div>

        </>
    );
};

export default FeaturesCard;