import FeaturesCard from "./FeaturesCard.jsx";
import {featuresData} from "../../assets/data/data";

const FeaturesList = () => {

    return (
        <section className="max-w-7xl px-[50px] mb-0 bg-gradient-to-r from-gray-950 to-[#111722] pb-3.5">
            <div className="relative">
                <h2 className="text-blue-600 opacity-20 md:text-[95px] text-[40px] text-center uppercase pt-[118px] font-bold">features</h2>
                <div
                    className="w-full max-w-[620px] h-[252px]
                     top-[146px]
                     mx-auto absolute -translate-x-1/2  left-1/2 lg:top-[191px]">

                    <h3 className="text-gray-200 text-center font-bold pb-6 text-[2rem] px-9

                    lg:text-[50px]
                    lg:px-0
                    md:pt-11
                    md:text-[40px]

                    ">Our Unique & Awesome
                        Core Features</h3>
                    <p className="text-center text-[16px] text-gray-700 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros.
                        Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
                    </p>
                </div>
            </div>
            <div className="pt-[300px] px-5
            grid grid-cols-1
            sm:grid-cols-2
            md:max-w-7xl
            mx-auto
            md:pt-[200px]
            lg:grid
            lg:justify-center
            lg:grid-cols-3
            lg:items-center
             ">
                {
                    featuresData.map((item, index) => (

                        <FeaturesCard item={item} key={index}/>
                    ))
                }
            </div>

        </section>
    );
};

export default FeaturesList;