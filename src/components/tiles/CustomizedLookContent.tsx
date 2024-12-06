import React from "react";
import { TimelineDataProps } from "../../interfaces";

const CustomizedTimelineContent: React.FC<TimelineDataProps> = ({
  title,
  description,
}) => {
  return (
    <div className="laptop:flex laptop:flex-col laptop:items-center items-start  laptop:text-center laptop:w-[200px] laptop:h-[200px]">
      <p className="text-[14px] tablet:text-[25px] font-bold mb-2">{title}</p>
      <p className="text-[10px] text-[#FFF0EC] font-[300] tablet:text-[15px]">
        {description}
      </p>
    </div>
  );
};
export default CustomizedTimelineContent;
