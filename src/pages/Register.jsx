import gambarLandscape from "../assets/gambarLandscape.svg";
import gambar from "../assets/gambarHeadline.svg";

const Register = () => {
  return (
    <div className="font-poppins w-full lg:flex pt-28">
      <div className="lg:w-7/12 w-full xl:ml-10">
        <div className="lg:grid flex lg:w-11/12 xl:ml-auto sm:ml-10 mx-auto ">
          <div className="w-6/12 lg:w-full hidden sm:block">
            <div className="w-10/12 text-left font-bold lg:text-5xl text-4xl">
              MentalMate
            </div>
            <div className="w-9/12 py-6 lg:text-lg text-base">
              Selamat datang kembali di MentalMate! Di sini, kita bangun
              bersama. Masuklah ke dalam ruang aman dan dukungan untuk kesehatan
              mental Anda.
            </div>
          </div>

          <img src={gambarLandscape} alt="" className="lg:block hidden" />
          <div className="lg:hidden block w-5/12 mx-auto">
            <img src={gambar} alt="" />
          </div>
        </div>
      </div>
      <div className="lg:w-5/12 sm:w-8/12 w-11/12 lg:mx-0 mx-auto lg:mt-0 mt-10">
        <div className="lg:w-10/12 w-full xl:mr-auto xl:mx-0 mx-auto bg-quaternary rounded-xl p-10">
          <div className="sm:w-10/12 mx-auto">
            <div className="text-left sm:text-xl text-base font-medium ">
              Halo Sobat Mental!
            </div>
            <div className="pt-6 pb-1 font-medium sm:text-base text-sm">
              Nama Lengkap
            </div>

            <input
              className="w-full pl-2 py-2 rounded-lg"
              placeholder="Ahmad Irham Ramadhan"
            />
            <div className="pt-2 pb-1 font-medium sm:text-base text-sm">
              Nomor Telepon
            </div>
            <div className="flex w-full">
              <div className="w-3/12 h-auto text-center ">
                <div className="w-11/12 h-full bg-white rounded-lg pt-2 pr-1    ">
                  +62
                </div>
              </div>
              <input className="w-9/12 pl-2 py-2 rounded-lg" />
            </div>
            <div className="pt-2 pb-1 font-medium sm:text-base text-sm">
              Email
            </div>
            <input
              className="w-full pl-2 py-2 rounded-lg"
              placeholder="irhamramadhan@gmail.com"
            />
            <div className="pt-2 pb-1 font-medium sm:text-base text-sm">
              Password
            </div>
            <input className="w-full pl-2 py-2 rounded-lg" type="password" />
            <div className="mx-auto mt-6 sm:text-sm text-xs">
              Dengan ini, Saya menyetujui Syarat & Ketentuan dan Kebijakan
              Privasi
            </div>
            <div className="w-fit mx-auto mt-8 ">
              <button className="text-white bg-primary rounded-lg py-4 sm:px-20 px-10">
                Daftar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
