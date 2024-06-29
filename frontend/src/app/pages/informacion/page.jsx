"use client";
import React from "react";
import PersonalInfoForm from "../../components/PersonalInfoForm/PersonalInfoForm";
import AvatarModel from "../../components/Avatar/Avatar";

const page = () => {
  return (
    <div>
      <AvatarModel />
      <PersonalInfoForm />
    </div>
  );
};

export default page;
