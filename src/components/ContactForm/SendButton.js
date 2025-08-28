import React, { useState } from "react";
import { AnimatedButton, Loader, Check } from "./SendButtonStyles";

const SendButton = ({ label = "Send" }) => {
  const [state, setState] = useState("idle"); 

  const handleClick = (e) => {
    e.preventDefault();

    if (state !== "idle") return;

    setState("loading");

    setTimeout(() => {
      setState("done");

      setTimeout(() => setState("idle"), 2000);
    }, 1500);
  };

  return (
    <AnimatedButton className="cursor-hover-target" onClick={handleClick} disabled={state === "loading"}>
      {state === "idle" && label}
      {state === "loading" && <Loader />}
      {state === "done" && <Check>✔</Check>}
    </AnimatedButton>
  );
};

export default SendButton;
