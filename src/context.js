import { createContext, useState } from "react";

export const RobotContext = createContext();

function Provider({ children }) {
  const [robotList, setRobotList] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(value);
    if (robotList.includes(value)) {
      alert("Robot listede bulunmakta");
    } else if (value.length < 1) {
      alert("Lütfen bir değer giriniz");
    } else {
      setRobotList([...robotList, value]);
    }
    setValue("");
    // console.log(robotList);
  };

  const removeItem = (robot) => {
    setRobotList(robotList.filter((robotItem) => robotItem !== robot));
  };

  const valueToShare = {
    value,
    removeItem,
    handleSubmit,
    setValue,
    robotList,
    setRobotList
  };

  return (
    <RobotContext.Provider value={valueToShare}>
      {children}
    </RobotContext.Provider>
  );
}

export { Provider };
