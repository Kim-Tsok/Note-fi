import { useState } from "react";

const Button = () => {
  const [num, setNum] = useState(0);
  const increment = () => {
    let a = 0;
    if (num == 0) {
      a = 1;
    } else if (num == 1) {
      a = 2;
    } else if (num == 2) {
      a = 3;
    } else if (num == 3) {
      a = 4;
    } else if (num == 4) {
      a = 5;
    } else {
      a = 69;
    }

    return a;
  };
  const handleClick = () => {
    setNum(increment());
  };
  return (
    <button
      onClick={handleClick}
      className="px-2 py-1 bg-blue-700 rounded-md ring-2 focus:ring-blue-700 m-2 text-white"
    >
      Click me - {num}
    </button>
  );
};

export default Button;
