import bannerImage from "../../assets/banner-image.png";
const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen container mx-auto rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img src={bannerImage} />

          <div>
            <h1 className="text-5xl font-bold">
              Books to freshen up your bookshelf
            </h1>
            <button className="btn btn-primary mt-10">View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
