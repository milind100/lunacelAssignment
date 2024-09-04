import React, { useEffect, useRef, useState } from "react";
import { tabs } from "./Tabs.description";

const Tabs = () => {
  const [openTab, setOpenTab] = useState(0);

  const contentRef = useRef(null);
  useEffect(() => {
    // Scroll the content area to the top when the tab changes
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [openTab]);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex p-2 bg-deepBlack rounded-[23px] shadow-tabs-main-shadow xl:mb-4  xl:mr-[33px]">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setOpenTab(index)}
            className={`flex-1 text-[8px] ssm:text-sm xl:text-lg font-[500] py-[10px] px-[10px] xmd:px-[24px] rounded-2xl transition-all duration-300 ${
              openTab === index
                ? "bg-lightBlack text-white shadow-activeTab-shadow-1 "
                : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        ref={contentRef}
        className="font-jakarta leading-[25.2] text-lightGray py-4 rounded-lg shadow-md overflow-y-auto custom-scrollbar"
      >
        <p className="text-sm ssm:text-base xl:text-xl leading-[25.2px] mr-[33px] ">
          {tabs[openTab]?.content}
        </p>
      </div>
    </div>
  );
};

export default Tabs;
