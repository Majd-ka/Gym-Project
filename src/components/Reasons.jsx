import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import nb from "../assets/nb.png";
import adidas from "../assets/adidas.png";
import nike from "../assets/nike.png";
import tick from "../assets/tick.png";
function Reasons() {
  return (
    <div id="Reasons" className="flex gap-8 px-8 reason">
      <div className=" flex-1 lg:grid gap-4 grid-cols-3 left-r hidden">
        <img className=" object-cover w-48 grid-rows-3" src={image1} alt="" />
        <img className=" object-cover w-auto h-64 grid" src={image2} alt="" />
        <img className=" object-cover w-56" src={image3} alt="" />
        <img className=" object-cover w-40" src={image4} alt="" />
      </div>
      <div className="flex-1 uppercase flex flex-col gap-4 text-center lg:text-left">
        <span className="font-bold text-orange-500">Some Reasons</span>
        <div className="lg:text-5lg text-white text-4lg">
          <span className="stroke-text">Why</span>
          <span> Choose Us?</span>
        </div>
        <div className="gap-4 flex flex-col uppercase text-white text-left">
          <div className="flex items-center gap-4 font-semibold lg:text-lg text-lg">
            <img className="w-8 h-8" src={tick} alt=""></img>
            <span>over 140+ expert coaches</span>
          </div>
          <div className="flex items-center gap-4 font-semibold lg:text-lg text-lg">
            <img className="w-8 h-8" src={tick} alt=""></img>
            <span>train smarter and faster than before</span>
          </div>
          <div className="flex items-center gap-4 font-semibold lg:text-lg text-lg">
            <img className="w-8 h-8" src={tick} alt=""></img>
            <span>1 free program for new member</span>
          </div>
          <div className="flex items-center gap-4 font-semibold lg:text-lg text-lg">
            <img className="w-8 h-8" src={tick} alt=""></img>
            <span>reliable partners</span>
          </div>
          <div className=" text-orange-500 text-center m-6 font-semibold">
            <span>Our partners</span>
          </div>
          <div className="flex items-center justify-around">
            <img src={adidas} alt="" />
            <img src={nike} alt="" />
            <img src={nb} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reasons;
