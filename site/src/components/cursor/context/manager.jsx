const React = require("react");
const { useState } = React;
const CustomCursorContext = require("./CustomCursorContext");

const CustomCursorManager = ({ children }) => {
  const [type, setType] = useState("default");

  return (
    <CustomCursorContext.Provider value={{ type, setType }}>
      {children}
    </CustomCursorContext.Provider>
  );
};

module.exports = CustomCursorManager;
