const Studio = () => {
  return (
    <div className="container mx-auto px-5 mb-32">
      <p className="text-[60px] font-[900] tablet:text-[70px] laptop:text-[200px] laptop:text-start text-center mb-10">
        <strong className="text-[#F69197]">Stu</strong>
        <strong className="text-[#fff]">dio</strong>
      </p>
      <p className="text-[#fff] text-[15px] tablet:text-[25px] laptop:text-start laptop:text-[30px] text-center mb-10 laptop:mb-32">
        Zobacz zdjęcia i wybierz przestrzeń, która <br /> najlepiej odda
        charakter Twojego projektu i spersonalizuj dodatki.
      </p>
      <div className="flex flex-col gap-6 laptop:flex-row">
        <div>
          <img src="dzien.png" alt="" />
        </div>
        <div>
          <img src="noc.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Studio;
