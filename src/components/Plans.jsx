import whiteTick from "../assets/whiteTick.png";
import { plansData } from "../plansData.jsx";
function Plans() {
  return (
    <div
      id="Plans"
      className="px-4 flex flex-col gap-16 text-white fill-orange-400"
    >
      <div className="blur left-0 w-2/6 h-1/6"></div>
      <div className="blur right-0 w-2/6 h-1/6"></div>
      <div className=" italic mt-5 flex gap-8 font-bold text-4xl lg:text-6xl justify-center text-white uppercase flex-col lg:flex-row text-center">
        <span className="stroke-text">ready to start</span>
        <span>your journey</span>
        <span className="stroke-text"> now with us</span>
      </div>
      <div className="flex justify-center items-center gap-10 lg:gap-24 flex-col lg:flex-row">
        {plansData.map((plan, i) => (
          <div
            key={i}
            className="flex flex-col gap-8 bg-gray-700  items-center w-80 p-6 plan"
          >
            {plan.icon}
            <span className=" font-bold text-2xl">{plan.name}</span>
            <span className=" font-bold text-5xl">$ {plan.price}</span>
            <span>
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-8">
                  <img src={whiteTick} alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </span>
            <div>
              <span>See More Benefits</span>
            </div>
            <button className="text-black py-4 px-16 font-bold bg-white rounded-lg">
              Join Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
