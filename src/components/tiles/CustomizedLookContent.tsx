import React from "react";
import { TimelineDataProps } from "../../interfaces";

const CustomizedTimelineContent: React.FC<TimelineDataProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col">
      <p className="text-[15px] tablet:text-[25px] font-bold mb-2">{title}</p>
      <p className="text-[10px] text-[#FFF0EC] font-[300] tablet:text-[15px]">
        {description}
      </p>
    </div>
  );
};
export default CustomizedTimelineContent;
