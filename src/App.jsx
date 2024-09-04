import React from "react";
import SectionBox from "./Components/SectionBox";
import Divider from "./Shared/Divider";
import PhotoGallary from "./Components/PhotoGalary/PhotoGallary";
import Tabs from "./Components/Tabs/Tabs";

const App = () => {
  return (
    <section className="bg-main-background shadow-main-background flex flex-col items-center min-w-screen min-h-screen  text-white">
      <div className="w-screen flex flex-col md:flex-row gap-6 xl:gap-14 px-5  py-10 md:py-24">
        <div className="min-h-[280px] max-h-[689px] w-full md:w-1/2 border border-lightBlue bg-overlayGray rounded-[27px] p-3  "></div>
        <div className="w-full md:w-1/2 flex flex-col gap-5 mr-5 xl:mr-14">
          <SectionBox>
            <Tabs />
          </SectionBox>
          <Divider />
          <SectionBox>
            <PhotoGallary />
          </SectionBox>
          <Divider />
        </div>
      </div>
    </section>
  );
};

export default App;
