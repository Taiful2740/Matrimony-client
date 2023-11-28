const Banner = () => {
  return (
    <div
      className="min-h-screen "
      style={{
        backgroundImage:
          "url(https://img2.shaadi.com/assests/semlandingpage2/home-banner-ri.webp)",
      }}
    >
      <div className="min-h-screen flex flex-col items-center justify-center ">
        <h1 className="mt-72 text-center text-5xl font-bold text-white">
          The World No.1 Matchmaking Service
        </h1>
        <p className=" mt-5 text-center text-4xl font-bold text-white">
          Search by City, Profession & Community
        </p>
      </div>
    </div>
  );
};

export default Banner;
