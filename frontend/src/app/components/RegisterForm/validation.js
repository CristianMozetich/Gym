import { useState } from "react";

export const Validation = () => {
  const [errorBlurName, setErrorBlurName] = useState("");
  const [errorBlurEmail, setErrorBlurEmail] = useState("");

  const onBlurName = (e) => {
    const name = e.target.value;
    if (name === "") {
      setErrorBlurName("Name is required");
    } else {
      setErrorBlurName("");
    }
  };

  const onBlurEmail = (e) => {
    const email = e.target.value;
    if(email === ""){
        setErrorBlurEmail("Email is required")
    } else {
        setErrorBlurEmail("")
    }
  }

  return { errorBlurName, onBlurName, errorBlurEmail, onBlurEmail };

};
