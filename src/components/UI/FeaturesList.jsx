import { featuresData } from "../../assets/data/data";
import Common from "./Common.jsx";
import FeaturesCard from "./FeaturesCard.jsx";

const FeaturesList = () => {
  return (
    <section
      id="feature"
      className="  mb-0  pb-3.5"
    >
      <div id="feature" className="px-4 max-w-7xl mx-auto md:px-12 overflow-hidden">
        <Common
          title={"features"}
          soustitle={"Our Unique & Awesom Core Features"}
          description={
            "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros.Donec vitae tortor lacus. Phasellus aliquam ante in maximus."
          }
        />
      </div>

      <div
        className="
            pt-[300px] px-5
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
