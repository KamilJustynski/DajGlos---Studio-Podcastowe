const Video = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="relative w-full">
        <p className="bg-[#EA7784] tablet:absolute tablet:-top-24 tablet:pb-4 tablet:w-[400px] tablet:right-0 z-50 text-center text-[12px] text-[#FFFFFF] py-3 px-5 rounded-full">
          Cześć, tu studio podcastowe “Daj Głos“ Aby pracować razem poznajmy się
          lepiej! 🙂
        </p>
        <div className="absolute bg-[#EA7784] w-5 h-5 right-1/2 tablet:right-44 tablet:-top-[42px] -bottom-2 transform -translate-x-1/2 rotate-45"></div>
      </div>
      <div className="relative">
        <img
          className="mx-auto mt-5 w-full h-[300px] laptop:h-[625px] rounded-3xl laptop:rounded-[50px] object-cover"
          src="Video.jpeg"
          alt=""
        />
        <img
          className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-50 w-32 h-32"
          src="Play.png"
          alt=""
        />
      </div>
      <p className="text-[#FFFFFF] text-center text-[15px] laptop:text-[40px] laptop:font-[700] tablet:text-[20px] mt-5">
        Chcesz wiedzieć co możemy dla Ciebie stworzyć?
      </p>
    </div>
  );
};
export default Video;
