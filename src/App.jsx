import "./App.css";
import Header from "./components/Header";
import hero_image from "./assets/hero_image.png";
import hero_image_back from "./assets/hero_image_back.png";
import Heart from "./assets/heart.png";
import Calories from "./assets/calories.png";
import Programs from "./components/Programs";
import Reasons from "./components/Reasons";
import Plans from "./components/Plans";
import Testimonials from "./components/testimonials";
import Join from "./components/Join";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import CountUp from "react-countup";
function App() {
  return (
    <div className="App relative">
      <div className="blur w-3/6 h-1/6 left-0 top-0 h-screen"></div>
      <div className="lg:h-screen">
        <header
          id="Home"
          className="flex lg:justify-between flex-col lg:flex-row gap-14 lg:gap-0"
        >
          <div className="left-header p-5 lg:basis-3/4 flex flex-col gap-5">
            <Header />
            <div className="lg:mt-24 bg-gray-700 rounded-3xl w-fit px-4 py-4 m-2 text-white uppercase relative flex justify-start items-center">
              <motion.div
                initial={{ left: "213px" }}
                whileInView={{ left: "8px" }}
                transition={{ type: "tween", duration: 2 }}
                className=" absolute bg-orange-500 w-20 h-10 left-2 rounded-3xl z-0"
              ></motion.div>
              <span className=" z-10">Best Fitness Club In The Word</span>
            </div>
            <section className="my-2 lg:my-10 flex flex-col gap-4 uppercase font-bold text-5xl lg:text-6xl text-white text-center lg:text-left">
              <div>
                <span className="stroke-text">Shape </span>
                <span>Your</span>
              </div>
              <div>
                <span>Ideal Body</span>
              </div>
              <div className=" font-normal text-base lowercase tracking-light">
                <span>
                  in here we will help you to shape and build your ideal body
                  and live up your life to fullest
                </span>
              </div>
            </section>
            <section className="text-white flex items-center md:justify-center lg:justify-start">
              <div className="inline-block text-center m-4">
                <span className="block lg:text-3lg text-2xl mb-1">
                  <CountUp end={140} start={100} duration={3} prefix="+" />
                </span>
                <span className="block text-gray-900">Expert Coaches</span>
              </div>
              <div className="inline-block text-center m-2">
                <span className="block lg:text-3lg text-2xl mb-1">
                  <CountUp end={978} start={900} duration={3} prefix="+" />
                </span>
                <span className="block text-gray-900">Members Joined</span>
              </div>
              <div className="inline-block text-center m-2">
                <span className="block lg:text-3lg text-2xl mb-1">
                  {" "}
                  <CountUp end={50} start={30} duration={3} prefix="+" />
                </span>
                <span className="block text-gray-900">Fitness Programs</span>
              </div>
            </section>
            <div className="flex gap-2 font-normal text-white mb-2 items-center justify-center lg:justify-start">
              <button className="bg-orange-500 p-2 font-bold border-4 border-solid border-transparent transition-all delay-200 hover:text-orange-500 hover:bg-white rounded-lg">
                Get Started
              </button>
              <button className="bg-transparent p-2 font-bold border-4 border-solid border-orange-500 transition-all delay-200 hover:text-orange-500 hover:border-white rounded-lg">
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:h-screen right-header basis-1/4 relative lg:bg-orange-500">
            <button className="text-black lg:left-1/2 lg:top-8 right-6 top-6 absolute p-2 font-bold border-4 border-solid border-transparent bg-white rounded-lg">
              Join Now
            </button>
            <motion.div
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              transition={{ type: "spring", duration: 4 }}
              className=" absolute lg:top-24 lg:left-1/2 rounded-2xl flex flex-col gap-4 bg-gray-700 w-fit p-4 items-start bottom-0 left-4 h-44"
            >
              <img src={Heart} alt="Heart" className="w-9" />
              <span className=" text-gray-400">Heart Rate</span>
              <span className="text-white text-lg">116 bpm</span>
            </motion.div>
            <img
              src={hero_image}
              alt="hero_image"
              className="lg:absolute xl:w-80 top-52 xl:right-52 z-10 md:m-auto lg:w-64 lg:right-52 w-80"
            />
            <motion.img
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              transition={{ type: "spring", duration: 4 }}
              src={hero_image_back}
              alt="hero_image_back"
              className="absolute xl:top-32 xl:right-80 -z-10 xl:w-64 top-0 md:right-96 lg:w-52 lg:right-80 lg:top-48 w-64"
            />
            <motion.div
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              transition={{ type: "spring", duration: 4 }}
              className="flex gap-8 bg-gray-700 rounded-lg absolute top-right p-3 top-80 right-6"
            >
              <img src={Calories} alt="" className=" w-12" />
              <div className="flex flex-col justify-between">
                <span className="text-gray-400">Calories Burned</span>
                <span className=" font-semibold text-2lg text-white">
                  220 Kcal
                </span>
              </div>
            </motion.div>
          </div>
        </header>
      </div>
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
