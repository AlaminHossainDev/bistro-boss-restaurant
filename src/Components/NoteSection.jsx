import featured from "../assets/home/featured.jpg"
const NoteSection = () => {
  return (
    <div>
      <div
        className="hero h-[572px]"
        style={{
          backgroundImage: `url(${featured})`,
        }}
      >
        <div className=""></div>
        <div className="hero-content text-center bg-white w-2/3 p-20">
          <div className="max-w-md">
            <h1 className="mb-5 lg:text-5xl font-bold">Bistro Boss</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteSection;
