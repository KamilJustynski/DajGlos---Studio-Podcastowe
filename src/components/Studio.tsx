const Studio = () => {
  return (
    <div className="container mx-auto px-5 mb-32">
      <p className="text-[60px] font-[900] text-center mb-10">
        <strong className="text-[#F69197]">Stu</strong>
        <strong className="text-[#fff]">dio</strong>
      </p>
      <p className="text-[#fff] text-lg text-center mb-10">
        Zobacz zdjęcia i wybierz przestrzeń, która najlepiej odda charakter
        Twojego projektu i spersonalizuj dodatki.
      </p>
      <div className="flex flex-col gap-6">
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
