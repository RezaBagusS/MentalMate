const CardSOS = ({ title = "", img = "", name = "" }) => {
  return (
    <div className="rounded-3xl h-fit lg:h-[300px] w-10/12 sm:w-8/12 lg:w-3/12 bg-white drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)]">
      <h2 className="font-semibold text-lg h-fit text-primary py-4 text-center">
        {title}
      </h2>
      <div className="relative rounded-3xl h-fit lg:h-[240px] pb-16 lg:pb-0 flex flex-col items-center gap-5 px-2 bg-primary pt-7">
        <img src={img} className="w-4/12" alt="profile" />
        <p className="italic font-normal text-center text-sm md:text-base text-white">{name}</p>
        <button className="absolute bottom-0 font-semibold bg-white hover:bg-slate-200 transition-all duration-300 text-primary translate-y-6 rounded-lg text-base flex justify-center py-2 px-6 drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)]">
          Klik Disini!
        </button>
      </div>
    </div>
  );
};

const SOS = () => {
  const dataSOS = [
    {
      title: "Konsultasi Rekan Sebaya",
      img: "https://res.cloudinary.com/dr0lbokc5/image/upload/v1700115324/Ellipse_21_qsrc0i.png",
      name: "Ngobrol bareng teman terbaikmu!",
    },
    {
      title: "Konsultasi Profesional",
      img: "https://res.cloudinary.com/dr0lbokc5/image/upload/v1700115327/Ellipse_20_tk2hpq.png",
      name: "Dr. Elijah, M.Psi",
    },
  ];

  return (
    <div className="cust-outer-container relative lg:h-screen">
      <div className="cust-container pt-28 pb-10 z-20">
        <div className="w-full flex flex-col gap-3 justify-center items-start">
          <h1 className=" text-3xl md:text-5xl font-bold">Halo Irham!</h1>
          <p className="w-8/12 md:w-6/12 lg:w-4/12 text-lg">
            Yuk, segera konsultasi dengan profesional atau obrolkan dengan rekan
            sebaya untuk mendapat pertolongan tercepat!
          </p>
        </div>
      </div>
      <div className="pt-7 pb-10 w-full h-fit flex lg:flex-row flex-col justify-center items-center gap-16 lg:gap-10 bg-quaternary">
        {dataSOS.map((item, index) => {
          return (
            <CardSOS
              key={index}
              title={item.title}
              img={item.img}
              name={item.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SOS;
