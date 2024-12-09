import { timelineData, timelineData02 } from "../helpers";
import CustomizedTimelineContent from "./tiles/CustomizedLookContent";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import {
  timelineAnimation,
  timelineAnimation02,
  timelineAnimationWidth,
} from "../animation";
import { LookTile } from "./tiles/LookTile";
import SectionHeader from "./tiles/SectionHeader";

export const Look = () => {
  return (
    <div className="container mx-auto px-5 my-32 relative">
      <SectionHeader title="Jak to wygląda?" />
      <LookTile
        titleNumber="1"
        title="Gdy wiesz co chcesz stworzyć"
        animation={
          window.innerWidth >= 1024 ? timelineAnimationWidth : timelineAnimation
        }
        content={CustomizedTimelineContent}
        data={timelineData}
        height="120"
        width="500px"
      />
      <LookTile
        titleNumber="2"
        title="Gdy nie jesteś pewien jak to ma wyglądać"
        animation={
          window.innerWidth >= 1024
            ? timelineAnimationWidth
            : timelineAnimation02
        }
        content={CustomizedTimelineContent}
        data={timelineData02}
        height="180"
        width="500"
      />
    </div>
  );
};
