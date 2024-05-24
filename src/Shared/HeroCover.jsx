import { Parallax } from "react-parallax";

const HeroCover = ({ bgImg, title, description }) => {
  return (
    <div>
      <Parallax
        blur={bgImg}
        bgImage={bgImg}
        bgImageAlt="Our menu"
        strength={-200}
      >
        <div className="h-[200px]" />
        <div className="hero h-[500px]">
          <div className="hero-content text-center bg-gray-800 opacity-80 md:w-2/3 p-20 rounded-lg">
            <div className="max-w-md">
              <h1 className="mb-5 text-white shadow-xl z-50 lg:text-5xl font-bold uppercase">
                {title}
              </h1>
              <p className="mb-5 text-white">{description}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default HeroCover;
