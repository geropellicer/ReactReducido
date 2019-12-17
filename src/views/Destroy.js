import React, { useEffect, useState } from "react";

const Destroy = () => {
  const [timer, setTimer] = useState(10);

  const countDown = () => {
    console.log("countdow");
  };

  const inter = setInterval(() => {
    less();
  }, 1000);

  const less = () => {
    console.log("less");
    if (timer > 0) {
      setTimer(timer - 1);
    } else {
      document.querySelector("html").remove();
      clearInterval(less());
    }
    clearInterval(inter);
  };

  useEffect(() => {
    countDown();
  }, [timer]);

  return (
    <div className="page-container">
      <h1 className="page-header">Destroy Works!</h1>
      <div className="page-body">
        <h1>Destruyendo en</h1>
        <h1>{timer}</h1>
      </div>
    </div>
  );
};

export default Destroy;
