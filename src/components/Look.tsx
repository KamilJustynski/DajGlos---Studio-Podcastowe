import { timelineData, timelineData02 } from "../helpers";
import CustomizedTimelineContent from "./tiles/CustomizedLookContent";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { timelineAnimation, timelineAnimation02 } from "../animation";
import { LookTile } from "./tiles/LookTile";

export const Look = () => {
  return (
    <div className="container mx-auto px-5 my-32 relative">
      <p className="text-center text-[60px] laptop:text-start laptop:text-[150px] tablet:text-[70px] font-[900] mb-10 text-[#F69197]">
        Jak to wygląda?
      </p>
      <LookTile
        titleNumber="1"
        title="Gdy wiesz co chcesz stworzyć"
        animation={timelineAnimation}
        content={CustomizedTimelineContent}
        data={timelineData}
        height="120"
      />
      <LookTile
        titleNumber="2"
        title="Gdy nie jesteś pewien jak to ma wyglądać"
        animation={timelineAnimation02}
        content={CustomizedTimelineContent}
        data={timelineData02}
        height="180"
      />
    </div>
  );
};
