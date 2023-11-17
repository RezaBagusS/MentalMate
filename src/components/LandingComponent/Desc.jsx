import gambar from "../../assets/gambarHeadline.svg";

const Desc = () => {
  return (
    <>
      <div className="lg:h-screen sm:h-fit lg:flex items-center lg:px-16 px-4 lg:pt-0 pt-28 sm:block hidden">
        <div className="lg:w-6/12 sm:w-8/12 sm:mx-auto lg:mx-0 relative">
          <img src={gambar} alt="" />
        </div>
        <div className="lg:w-6/12 sm:w-10/12 sm:mx-auto lg:mx-0 lg:pt-0 sm:pt-4">
          <div className="lg:w-11/12 sm:w-full mx-auto">
            <div className="font-bold xl:text-5xl lg:text-3xl sm:text-4xl text-xl font-poppins w-fit lg:mx-0 sm:mx-auto">
              MentalMate
            </div>
            <div className="lg:w-11/12 sm:w-full text-justify lg:text-lg py-4 sm:text-base text-xs">
              MentalMate adalah website platform online yang berfokus pada
              kesejahteraan mental dari mahasiswa yang mengalami dan menghadapi
              tantangan seperti diskriminasi dan trauma di lingkungan sekitar
              khususnya perguruan tinggi.
            </div>
            <div className="w-fit lg:mx-0 sm:mx-auto">
              <button className="text-white bg-primary rounded-lg py-4 px-20 mx-auto">
                Mulai
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden w-full pt-24">
        <div
          className="w-11/12 mx-auto bg-cover aspect-square shadow-2xl drop-shadow-lg rounded-2xl"
          style={{ backgroundImage: `url(${gambar})` }}
        >
          <div className="w-full bg-black bg-opacity-40 py-8 aspect-square rounded-xl">
            <div className="text-white font-bold  text-2xl font-poppins w-fit mx-auto">
              MentalMate
            </div>
            <div className="w-10/12 text-justify py-4 text-sm mx-auto text-white pb-8">
              MentalMate adalah website platform online yang berfokus pada
              kesejahteraan mental dari mahasiswa yang mengalami dan menghadapi
              tantangan seperti diskriminasi dan trauma di lingkungan sekitar
              khususnya perguruan tinggi.
            </div>
            <div className="w-fit mx-auto">
              <button className="text-white bg-primary rounded-lg py-2 px-10 mx-auto">
                Mulai
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Desc;
