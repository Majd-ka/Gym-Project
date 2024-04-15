import { useState } from "react";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";
import { testimonialsData } from "../testimonials";
import { motion } from "framer-motion";
function Testimonials() {
  const [selected, setSelected] = useState(0);
  const tLenght = testimonialsData.length;
  return (
    <div
      id="Testimonials"
      className="flex gap-4 px-8 flex-col lg:flex-row text-center lg:text-left"
    >
      <div className="flex flex-col gap-8 uppercase flex-1 text-white">
        <span className="text-orange-400 font-bold">testimonials</span>
        <span className="stroke-text font-bold lg:text-5xl text-4xl">
          what they
        </span>
        <span className=" font-bold lg:text-5xl text-4xl">say about us</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ type: "spring", duration: 2 }}
          className="lg:leading-10 transform-none lg:text-justify lg:tracking-widest leading-7"
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span className="text-orange-400">
            {testimonialsData[selected].name}
          </span>{" "}
          - <span>{testimonialsData[selected].status}</span>
        </span>
      </div>
      <div className="flex-1 relative">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 2 }}
          className="absolute w-72 h-80 border-2 border-solid border-orange-400 bg-transparent lg:right-40 lg:top-4 -z-10 -top-5 hidden lg:block"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 2 }}
          className="absolute w-72 h-80 bg-gradient-to-bl from-orange-500 to-red-500 lg:right-32 lg:top-12 -z-10 -right-0 top-8 hidden lg:block"
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ type: "spring", duration: 3 }}
          className=" lg:absolute w-72 h-80 object-cover right-36 top-8 m-auto"
          src={testimonialsData[selected].image}
          alt=""
        />
        <div className="flex justify-center gap-10 mt-10">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(tLenght - 1)
                : setSelected((e) => e - 1);
            }}
            className="w-6 h-6 m-1 lg:absolute bottom-0 cursor-pointer lg:-bottom-8 lg:left-40 xl:-bottom-14"
            src={leftArrow}
            alt=""
          />
          <img
            onClick={() => {
              selected === tLenght - 1
                ? setSelected(0)
                : setSelected((e) => e + 1);
            }}
            className="h-6 w-6 m-1 lg:absolute bottom-0 cursor-pointer lg:-bottom-8 xl:-bottom-14"
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
