import { Link } from "react-router-dom";
import daily from "../../assets/daily.svg";
import mood from "../../assets/mood.svg";
import share from "../../assets/share.svg";
import sos from "../../assets/sos.svg";

const dataFeature = [
  {
    image: daily,
    header: "Daily Planner",
    text: "Mulai perencanaan harianmu!",
    link: "daily-planner",
  },
  {
    image: mood,
    header: "Mood Tracker",
    text: "Mulai pencatatan mood harianmu!",
    link: "mood-tracker",
  },
  {
    image: share,
    header: "Share Your Thoughts",
    text: "Konsultasikan suasana hatimu!",
    link: "",
  },
  {
    image: sos,
    header: "SOS",
    text: "Segera dapatkan penanganan professional!",
    link: "sos",
  },
];

const Feature = () => {
  return (
    <>
      <div className="font-poppins sm:px-0 px-4 pb-10">
        <div className="lg:py-16 lg:pt-10 lg:pb-10 pt-16 pb-4 text-5xl w-fit mx-auto font-medium">
          Features
        </div>
        <div className="flex flex-wrap">
          {dataFeature.map((item, i) => (
            <div className="lg:w-3/12 w-6/12 mx-auto lg:mt-0 mt-6" key={i}>
              <div className="w-11/12 text-center h-full relative">
                <img src={item.image} alt="" className="mx-auto" />
                <div className="text-lg lg:py-10 py-5 font-medium">
                  {item.header}
                </div>
                <div className="text-xs w-8/12 mx-auto pb-16">{item.text}</div>

                <div className="w-full mx-auto absolute bottom-0">
                  <Link to={item.link}>
                    <button className="text-white bg-primary rounded-full py-2 sm:px-10 px-6  sm:text-base text-sm">
                      See More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Feature;
