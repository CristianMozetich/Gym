import React from "react";
import WarmUpPlan from "../../components/WarmUpPlan/WarmUpPlan"
import MainPlan from "../../components/MainPlan/MainPlan"
import CoolDownPlan from "../../components/CoolDownPlan/CoolDownPlan"
const page = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="flex flex-col gap-6 m-3">
        <WarmUpPlan />
        <MainPlan />
        <CoolDownPlan />
      </div>
    </div>
  );
};

export default page;
