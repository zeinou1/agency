import { featuresData } from "../../assets/data/data";
import Common from "./Common.jsx";
import FeaturesCard from "./FeaturesCard.jsx";

const FeaturesList = () => {
  return (
    <section
      id="feature"
      className="md:max-w-7xl px-[50px] mb-0 bg-gradient-to-r from-gray-950 to-[#111722] pb-3.5"
    >
      <div className="feature">
        <Common
          title={"features"}
          soustitle={"Our Unique & Awesom Core Features"}
          description={
            "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros.Donec vitae tortor lacus. Phasellus aliquam ante in maximus."
          }
        />
      </div>

      <div
        className="pt-[300px] px-5
            grid grid-cols-1
            sm:grid-cols-2
            md:max-w-7xl
            mx-auto
            md:pt-[200px]
            lg:grid
            lg:justify-center
            lg:grid-cols-3
            lg:items-center
             "
      >
        {featuresData.map((item, index) => (
          <FeaturesCard item={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesList;
