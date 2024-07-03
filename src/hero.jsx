import banner from "/src/assets/banner1.jpg";

function Hero() {
  return (
    <div
      className="md:h-[100vh] md:w-[100%] w-[100%] h-[100%] min-h-[50vh] flex items-center content-center justify-center "
      style={{
        background:
          `linear-gradient(rgba(5,77,149,0.6),rgba(5,77,149,0.6)),url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%"
      }}
    >
      <div className="md:w-[60%] w-full p-5 md:p-0 pt-16">
        <h2 className="text-[white] md:text-5xl text-2xl pt-3 md:p-0 "
        style={{
            fontFamily:"anton"
           
            
        }}> Transforming ideas into digital reality</h2>
        <p className="mt-5 text-white">
          Accelerating your digital journey with immortal-technology. <strong> <em>Immortal
          Technologies</em></strong> provides every service you might need for web and
          internet marketing. We are a full-service company, meaning that we can
          handle every aspect of your online presence from website design to
          internet marketing.
        </p>
        <button className="mt-8 p-2 text-[#f1e9e9] bg-[#3588db] hover:bg-[#242452] rounded-lg ">Talk to our expert</button>
      </div>
    </div>
  );
}
export default Hero;
