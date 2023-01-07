import Navbar from "../components/navbarSec";
import Footer from "../components/footer";

function Featured() {
  return (
    <div className="featured-wrapper min-h-screen bg-sober-pink sm:container sm:mx-auto">
      <Navbar />
      <div className="heading-wrapper text-[#782224] font-alice text-3xl mt-28 items-center flex justify-center">
        Featured Stories 💟
      </div>
      <div className="sub-heading-wrapper text-[#BA4440] mt-5 w-[584px] text-center font-manrope font-semibold text-base mx-auto items-center flex justify-center">
        “Empowering women through storytelling”
      </div>
      <div className="card-btn-wrapper mx-auto w-fit flex flex-col items-end justify-start">
      <div className="content-wrapper flex flex-row justify-center mt-16">
        <div className="cards-wrapper transition-all bg-white mx-12">
          <div className="banner-wrapper bg-[#FFF1F3] mx-auto mt-6"></div>
          <div className="card-title-wrapper ml-6 mt-2 text-md  font-semibold font-manrope text-[#BA4440] text-left">
            Meet Sunidhi🌟
          </div>
          <div className="card-description-wrapper ml-6 mt-1 w-[205px] h-[50px] text-xs font-semibold font-manrope text-[#BA4440] text-left">
            "Sunidhi, a 30-year-old lady, hails from Nashik, Maharashtra. She owns a tea stall in rural areas. Despite being a widow...."
          </div>
        </div>
        <div className="cards-wrapper transition-all bg-white mx-12">
          <div className="banner-wrapper bg-[#FFF1F3] mx-auto mt-6"></div>
          <div className="card-title-wrapper ml-6 mt-2 text-md  font-semibold font-manrope text-[#BA4440] text-left">
            Meet Navya🤩
          </div>
          <div className="card-description-wrapper ml-6 mt-1 w-[205px] h-[50px] text-xs font-semibold font-manrope text-[#BA4440] text-left">
            "A school dropout girl selling street food on the roads of Indore, Madhya Pradesh. She is constantly earning to support her family and ..."
          </div>
        </div>
        <div className="cards-wrapper transition-all bg-white mx-12">
          <div className="banner-wrapper bg-[#FFF1F3] mx-auto mt-6"></div>
          <div className="card-title-wrapper ml-6 mt-2 text-md  font-semibold font-manrope text-[#BA4440] text-left">
            Meet Farida✨
          </div>
          <div className="card-description-wrapper ml-6 mt-1 w-[205px] h-[50px] text-xs font-semibold font-manrope text-[#BA4440] text-left">
            " A married woman runs her own small tailoring business to manifest a sustainable life for her family. While her husband... "
          </div>
        </div>
      </div>
      <div className="content-wrapper flex flex-row justify-center mt-16">
        <div className="cards-wrapper transition-all bg-white mx-12">
          <div className="banner-wrapper bg-[#FFF1F3] mx-auto mt-6"></div>
          <div className="card-title-wrapper ml-6 mt-2 text-md  font-semibold font-manrope text-[#BA4440] text-left">
            Meet Sunidhi🌟
          </div>
          <div className="card-description-wrapper ml-6 mt-1 w-[205px] h-[50px] text-xs font-semibold font-manrope text-[#BA4440] text-left">
            "Sunidhi, a 30-year-old lady, hails from Nashik, Maharashtra. She owns a tea stall in rural areas. Despite being a widow...."
          </div>
        </div>
        <div className="cards-wrapper transition-all bg-white mx-12">
          <div className="banner-wrapper bg-[#FFF1F3] mx-auto mt-6"></div>
          <div className="card-title-wrapper ml-6 mt-2 text-md  font-semibold font-manrope text-[#BA4440] text-left">
            Meet Navya🤩
          </div>
          <div className="card-description-wrapper ml-6 mt-1 w-[205px] h-[50px] text-xs font-semibold font-manrope text-[#BA4440] text-left">
            "A school dropout girl selling street food on the roads of Indore, Madhya Pradesh. She is constantly earning to support her family and ..."
          </div>
        </div>
        <div className="cards-wrapper transition-all bg-white mx-12">
          <div className="banner-wrapper bg-[#FFF1F3] mx-auto mt-6"></div>
          <div className="card-title-wrapper ml-6 mt-2 text-md  font-semibold font-manrope text-[#BA4440] text-left">
            Meet Farida✨
          </div>
          <div className="card-description-wrapper ml-6 mt-1 w-[205px] h-[50px] text-xs font-semibold font-manrope text-[#BA4440] text-left">
            " A married woman runs her own small tailoring business to manifest a sustainable life for her family. While her husband... "
          </div>
        </div>
      </div>
      <div className="btn-wrapper flex justify-end ">
      <button className="button-wrapper mt-20 py-2 px-3 rounded-sm bg-white hover:bg-slate-50 transition-all">🧡 LIKE</button>
      <button className="button-wrapper mt-20 mx-12 py-2 px-3 rounded-sm bg-white hover:bg-slate-50 transition-all">Share Stories 💓</button>
      </div>
      </div>
      <div className="sub-heading-wrapper quote-wrapper text-[#BA4440] mt-40 w-[584px] text-center font-manrope font-semibold text-lg mx-auto items-center">
        “The women who dare to defy the rules, break the barriers, and embrace their own power are the ones who will change the world.” <br></br>
        <p className="sub-quote-wrapper mt-12">-- Unknown</p>
      </div>
      <div className="secondary-footer-wrapper mt-32">
        <Footer />
      </div>
    </div>
  );
}

export default Featured;