import React, { useState } from "react";

export const Validation = () => {
  const [errorBlurName, setErrorBlurName] = useState<string>("");
  const [errorBlurEmail, setErrorBlurEmail] = useState<string>("");

  const onBlurName = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.value;
    if (name === "") {
      setErrorBlurName("Name is required");
    } else {
      setErrorBlurName("");
    }
  };

  const onBlurEmail = (e: React.FormEvent<HTMLInputElement>) => {
    const email = e.currentTarget.value;
    if(email === ""){
        setErrorBlurEmail("Email is required")
    } else {
        setErrorBlurEmail("")
    }
  }

  return { errorBlurName, onBlurName, errorBlurEmail, onBlurEmail };

};
