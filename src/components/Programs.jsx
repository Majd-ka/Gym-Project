import { programsData } from "../programsData";
import RightArrow from "../assets/rightArrow.png";
function Programs() {
  return (
    <section id="Programs" className="flex flex-col gap-8 px-8">
      <div className="gap-5 italic mt-5 flex lg:gap-20 font-bold text-4xl lg:text-6xl justify-center text-white uppercase flex-col lg:flex-row text-center">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>
      <div className="flex gap-8 flex-col lg:flex-row text-center lg:text-left">
        {programsData.map((program) => (
          <div
            className="rounded-2xl flex flex-col bg-gray-500 p-8 gap-4 text-white justify-between program-cat cursor-pointer bg-gradient-to-bl hover:from-orange-500 hover:to-red-500"
            key={program.id}
          >
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="flex items-center gap-8 m-auto lg:m-1">
              <span>Join Now</span>{" "}
              <img className="w-6" src={RightArrow} alt="RightArrow" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Programs;
