import golfapp from "../assets/golfapp.png";
import MovieReview from "../assets/MovieReview.png";
import hero from "../assets/hero.png";
import calc from "../assets/calc.png"

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-white">
            Work I did
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${calc})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="rounded-lg opacity-0 bg-indigo-500 group-hover:opacity-100 px-2">
              <span className="text-2xl font-bold text-white tracking-wider">
                Javascript Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://medium.com/@jburdt/basic-calculator-app-fbc966ce6c2a">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Blog
                  </button>
                </a>
                <a href="https://github.com/Jburdt/calculator-app.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${MovieReview})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="rounded-lg opacity-0 bg-indigo-500 group-hover:opacity-100 px-2 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Js & Ruby on rails
              </span>
              <div className="pt-8 text-center">
                <a href="https://youtu.be/ceq4WzW_jyo">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Jburdt/Final-project">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${hero})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="rounded-lg opacity-0 bg-indigo-500 group-hover:opacity-100 px-2">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Js Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://youtu.be/OI0iHMWvNmo">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Jburdt/Hero-App-Phase-2-Project">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item / start of new work*/}
          <div
            style={{ backgroundImage: `url(${calc})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="rounded-lg opacity-0 bg-indigo-500 group-hover:opacity-100 px-2">
              <span className="text-2xl font-bold text-white tracking-wider">
                Javascript Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://medium.com/@jburdt/basic-calculator-app-fbc966ce6c2a">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Blog
                  </button>
                </a>
                <a href="https://github.com/Jburdt/calculator-app.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*end of work*/}
          {/* Grid Item / start of new work*/}
          {/* <div
            style={{ backgroundImage: `url(${calc})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          > */}
            {/* Hover effects */}
            {/* <div className="rounded-lg opacity-0 bg-indigo-500 group-hover:opacity-100 px-2">
              <span className="text-2xl font-bold text-white tracking-wider">
                Javascript Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://medium.com/@jburdt/basic-calculator-app-fbc966ce6c2a">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Blog
                  </button>
                </a>
                <a href="https://github.com/Jburdt/calculator-app.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div> */}
          {/*end of work*/}
        </div>
      </div>
    </div>
  );
};

export default Work;
