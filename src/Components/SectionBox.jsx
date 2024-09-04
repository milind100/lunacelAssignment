import React from "react";
import questionIcon from "../assets/question.svg";
import reactangleIcon from "../assets/reactangleIcon.svg";

const SectionBox = ({ children }) => {
  return (
    <div className="flex gap-1 md:gap-4 max-w-[720px] h-[222px] md:h-[322px] px-3 py-5 bg-slateGray rounded-[18px] shadow-section-shadow">
      <div className="flex flex-col gap-28">
        <img
          src={questionIcon}
          className="questionIcon"
          alt="questionIcon logo"
        />
        <img
          src={reactangleIcon}
          className="reactangleIcon"
          alt="reactangleIcon logo"
        />
      </div>
      <div className="w-full h-full overflow-hidden">{children}</div>
    </div>
  );
};

export default SectionBox;
