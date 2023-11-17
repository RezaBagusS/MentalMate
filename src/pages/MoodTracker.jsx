import sedihTrue from "../assets/emoticon/sedihTrue.svg";
import sedihFalse from "../assets/emoticon/sedihFalse.svg";
import lumayanTrue from "../assets/emoticon/lumayanTrue.svg";
import lumayanFalse from "../assets/emoticon/lumayanFalse.svg";
import kurangTrue from "../assets/emoticon/kurangTrue.svg";
import kurangFalse from "../assets/emoticon/kurangFalse.svg";
import biasaTrue from "../assets/emoticon/biasaTrue.svg";
import biasaFalse from "../assets/emoticon/biasaFalse.svg";
import bahagiaTrue from "../assets/emoticon/bahagiaTrue.svg";
import bahagiaFalse from "../assets/emoticon/bahagiaFalse.svg";
import polygon from "../assets/polygon.svg";
import { useState } from "react";

const dataIcon = [
  {
    type: "sedih",
    iconTrue: sedihTrue,
    iconFalse: sedihFalse,
  },
  {
    type: "kurang",
    iconTrue: kurangTrue,
    iconFalse: kurangFalse,
  },
  {
    type: "biasa",
    iconTrue: biasaTrue,
    iconFalse: biasaFalse,
  },
  {
    type: "lumayan",
    iconTrue: lumayanTrue,
    iconFalse: lumayanFalse,
  },
  {
    type: "bahagia",
    iconTrue: bahagiaTrue,
    iconFalse: bahagiaFalse,
  },
];

const DisplayPC = ({ emotActive, setEmotActive }) => {
  return (
    <div className="hidden lg:grid grid-cols-12 gap-5 h-3/4">
      <div className="col-span-5">
        <div className="hidden lg:flex flex-col absolute left-0 bottom-1/2 translate-y-2/3 w-5/12">
          <div className="px-14 py-8 rounded-e-3xl flex flex-col gap-5 bg-primary drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <h3 className="font-medium text-white lg:text-2xl xl:text-3xl ps-4">
              Bagaimana <br /> perasaanmu saat ini?
            </h3>
            <div className="w-full flex">
              {dataIcon.map((item, index) => {
                return (
                  <div key={index} className="w-1/5 flex flex-col items-center">
                    <div
                      onClick={() => setEmotActive(item.type)}
                      className="w-14 h-14 cursor-pointer drop-shadow-[0px_4px_15px_rgba(0,0,0,0.1)] rounded-full bg-gray-300 flex justify-center items-center"
                    >
                      <img
                        className="w-10 h-10"
                        src={
                          emotActive == item.type
                            ? item.iconTrue
                            : item.iconFalse
                        }
                        alt="icon"
                      />
                    </div>
                    <p className="text-xs xl:text-base text-white font-normal mt-2">
                      {item.type}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col justify-end gap-4 h-full mt-7 px-10">
            <h3 className="text-2xl z-20 text-center font-medium text-white">
              Satu kata buat hari ini dong!
            </h3>
            <div className="grid grid-cols-12 gap-5 w-full">
              <div className="w-full col-span-8 relative">
                <input
                  type="text"
                  placeholder="Isi Yuk! 🤗."
                  className="w-full z-20 text-gray-600 rounded-lg px-4 py-3 active:outline-none focus:outline-none"
                />
                <img
                  src={polygon}
                  className="absolute cursor-pointer w-5 h-5 right-5 top-1/2 -translate-y-1/2"
                  alt="icon"
                />
              </div>
              <button className="bg-primary hover:bg-primary/70 transition-all duration-150 col-span-4 w-full py-3 rounded-lg text-white font-light drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-7 h-full">
        <div className="flex flex-col gap-2 mb-5">
          <h2 className="text-4xl font-bold">Dear Irham,</h2>
          <p className="font-medium text-xl w-11/12">
            Kamu boleh banget menceritakan pengalaman dan kegiatan kamu hari
            ini, keluh kesahmu, curhatin aja semuanya disini, ya!
          </p>
        </div>
        <textarea
          className="bg-white p-4 h-3/5 text-gray-600 rounded-lg text-lg font-semibold resize-none active:outline-none focus:outline-none w-full drop-shadow-[0px_4px_15px_rgba(0,0,0,0.1)]"
          placeholder="Isi Yuk! 🤗."
        ></textarea>
      </div>
    </div>
  );
};

const DisplayMobile = ({ emotActive, setEmotActive }) => {
  return (
    <div className="pt-10 mt-10">
      <div className="w-full pt-10">
        <div className="relative bg-primary rounded-t-3xl flex flex-col gap-10 pt-32 px-2 md:px-10 pb-10 ">
          <div className="absolute right-1/2 translate-x-1/2 -top-1/2 translate-y-1/2 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.2)] ">
            <img
              className="w-40 h-40"
              src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1700105663/Rectangle_384_mdcubr.png"
              alt="profile"
            />
          </div>
          <p className="text-xl md:text-4xl font-medium text-center text-white">
            Bagaimana perasaanmu saat ini?
          </p>
          <div className="flex">
            {dataIcon.map((item, index) => {
              return (
                <div key={index} className="w-1/5 flex flex-col items-center">
                  <div
                    onClick={() => setEmotActive(item.type)}
                    className="w-14 h-14 cursor-pointer drop-shadow-[0px_4px_15px_rgba(0,0,0,0.1)] rounded-full bg-gray-300 flex justify-center items-center"
                  >
                    <img
                      className="w-10 h-10"
                      src={
                        emotActive == item.type ? item.iconTrue : item.iconFalse
                      }
                      alt="icon"
                    />
                  </div>
                  <p className="text-xs xl:text-base text-white font-normal mt-2">
                    {item.type}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-quaternary py-10 flex flex-col gap-5 justify-center items-center">
          <h3 className="font-medium text-xl md:text-3xl text-white">
            Satu kata buat hari ini dong!
          </h3>
          <div className="flex justify-center gap-3 md:gap-5 px-2">
            <div className="rounded-lg w-48 h-w-48 overflow-hidden drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              <img
                className="w-full"
                src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1700113268/Rectangle_384_1_qhynns.png"
                alt="img"
              />
            </div>
            <div className="flex flex-col justify-evenly gap-5">
              <div className="w-full col-span-8 relative">
                <input
                  type="text"
                  placeholder="Isi Yuk! 🤗."
                  className="w-full z-20 text-gray-600 rounded-lg text-xs md:text-base md:px-4 px-2 md:py-3 py-2 active:outline-none focus:outline-none"
                />
                <img
                  src={polygon}
                  className="absolute cursor-pointer md:w-5 w-3 md:h-5 h-3 md:right-5 right-3 top-1/2 -translate-y-1/2"
                  alt="icon"
                />
              </div>
              <button className="ms-auto w-fit md:w-1/2 bg-primary hover:bg-primary/70 transition-all duration-150 col-span-4 py-2 md:py-3 px-2 md:px-0 rounded-lg text-white font-light drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                Lanjutkan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MoodTracker = () => {
  const [emotActive, setEmotActive] = useState("none");

  return (
    <div className="cust-outer-container relative lg:h-screen">
      <div className="hidden lg:block absolute bg-quaternary bottom-0 z-0 w-full h-60"></div>
      <div className="cust-container lg:h-full pt-28 z-20">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-3xl md:text-5xl font-bold">Halo Irham!</h1>
          <div className="hidden lg:block drop-shadow-[0px_4px_4px_rgba(0,0,0,0.2)] ">
            <img
              className="w-24 h-24"
              src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1700105663/Rectangle_384_mdcubr.png"
              alt="profile"
            />
          </div>
        </div>
        <DisplayPC emotActive={emotActive} setEmotActive={setEmotActive} />
      </div>
      <DisplayMobile emotActive={emotActive} setEmotActive={setEmotActive} />
    </div>
  );
};

export default MoodTracker;
