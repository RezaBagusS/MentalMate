import { Calendar } from "primereact/calendar";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import search from "../assets/search.svg";
import add from "../assets/add.svg";
import chevron from "../assets/chevron.svg";
import circle from "../assets/circle.svg";
import chevronPrimary from "../assets/chevronPrimary.svg";

import { useState } from "react";

const dataPlan = [
  {
    check: true,
    name: "Project Akhir ASD",
    deadline: "Today",
    time: "10:00",
  },
  {
    check: false,
    name: "Jemur Cucian",
    deadline: "Today",
    time: "16:45",
  },
  {
    check: false,
    name: "Siram Tanaman",
    deadline: "Today",
    time: "17:00",
  },
];

const DailyPlanner = () => {
  const [date, setDate] = useState(null);
  const [data, setData] = useState(dataPlan);

  return (
    <div className="cust-outer-container">
      <div className="grid lg:grid-cols-12 bg-quaternary lg:bg-[#FAF6F5]">
        <div className="col-span-1 grid grid-cols-12 lg:col-span-4 lg:flex lg:flex-col gap-5 justify-center items-center bg-[#FAF6F5] lg:bg-quaternary px-5 sm:px-16 lg:px-4 pt-28 pb-16 lg:py-28">
          <div className="rounded-full hidden lg:block overflow-hidden drop-shadow-[0px_4px_4px_rgba(0,0,0,0.2)] ">
            <img
              className="w-48 lg:w-32 h-48 lg:h-32"
              src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1700105663/Rectangle_384_mdcubr.png"
              alt="profile"
            />
          </div>
          <div className="flex flex-col items-center col-span-12 md:col-span-8 lg:col-span-1 gap-5">
            <h2 className="font-bold text-xl sm:text-3xl md:text-4xl lg:text-xl text-start lg:text-center italic text-black lg:text-white">
              Selamat Datang Kembali, <span className="underline">Irham!</span>
            </h2>
            <p className="text-start text-sm sm:text-base lg:text-center md:text-xl lg:text-lg text-black lg:text-white">
              “You don’t get what you wish for. You get what you work for.”
              <br />
              –Daniel Milstein
            </p>
          </div>
          <div className=" md:col-span-4 lg:col-span-1 hidden md:flex justify-center items-center">
            <div className="rounded-full lg:hidden aspect-square h-full block overflow-hidden drop-shadow-[0px_4px_4px_rgba(0,0,0,0.2)] ">
              <img
                className="w-full"
                src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1700105663/Rectangle_384_mdcubr.png"
                alt="profile"
              />
            </div>
          </div>
          <div className="hidden lg:block w-full">
            <Calendar
              value={date}
              onChange={(e) => setDate(e.value)}
              inline
              showWeek
              className="w-full p-2"
            />
          </div>
        </div>
        <div className="relative col-span-1 lg:col-span-8 cust-container px-2 py-14 md:py-20 lg:py-28 flex flex-col gap-4">
          <div className="rounded-full absolute right-0 -top-14 md:hidden aspect-square h-32 block overflow-hidden drop-shadow-[0px_4px_4px_rgba(0,0,0,0.2)] ">
            <img
              className="w-full"
              src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1700105663/Rectangle_384_mdcubr.png"
              alt="profile"
            />
          </div>
          <h1 className=" text-3xl md:text-5xl font-bold text-white lg:text-[#836767]">
            To-Do List!
          </h1>
          <div className="border-2 border-[#979797] bg-white ps-4 py-4 flex items-center gap-3 rounded-md overflow-hidden">
            <img src={search} alt="img" className="cursor-pointer w-6 h-6" />
            <input
              type="text"
              placeholder="Cari tugasmu disini.."
              className="h-full text-quaternary text-2xl bg-transparent active:outline-none focus:outline-none flex w-full"
            />
          </div>
          <div className="w-10/12 md:w-7/12 cursor-pointer hover:bg-slate-100 transition-all duration-150 bg-white px-4 flex gap-4 items-center py-4 rounded-sm drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <img src={add} alt="icon" />
            <div className="flex flex-col gap-1 font-light">
              <p className="font-normal">Tambahkan Tugas Baru</p>
              <p className="text-quaternary">Deadline?</p>
            </div>
          </div>
          <div className="flex justify-between mt-7">
            <div className="rounded-md flex gap-3 px-5 py-2 bg-primary cursor-pointer text-white drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              <p className="font-medium text-lg">Today</p>
              <img src={chevron} alt="icon" />
            </div>
            <div className="flex gap-2">
              <img
                src={chevronPrimary}
                className="w-10 h-10 hidden lg:block cursor-pointer"
                alt="icon"
              />
              <img
                src={chevronPrimary}
                className="w-10 h-10 hidden lg:block cursor-pointer rotate-180 fill-primary text-primary"
                alt="icon"
              />
              <img
                src={chevron}
                className="w-10 h-10 lg:hidden cursor-pointer"
                alt="icon"
              />
              <img
                src={chevron}
                className="w-10 h-10 cursor-pointer lg:hidden rotate-180 fill-primary text-primary"
                alt="icon"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {data.map((item, index) => {
              const handleImageClick = () => {
                const updatedData = [...data];
                updatedData[index].check = !item.check;
                setData(updatedData);
              };

              return (
                <div
                  key={index}
                  className="w-full flex items-center gap-3 rounded-md p-3 bg-white drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                >
                  {item.check ? (
                    <img
                      src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1700195837/Group_259_gvxfgt.png"
                      alt="img"
                      className="cursor-pointer"
                      onClick={handleImageClick}
                    />
                  ) : (
                    <img
                      src={circle}
                      className="ms-2 w-10 h-10 cursor-pointer"
                      alt="icon"
                      onClick={handleImageClick}
                    />
                  )}
                  <div className="flex flex-col gap-2">
                    <p className="font-normal">{item.name}</p>
                    <p className="text-quaternary font-light">
                      {item.deadline} At {item.time}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyPlanner;
