const { createContext } = require("react");

// Define the types
const CursorLookType = [
  "slider-hover",
  "slider-drag",
  "text",
  "link",
  "hamburger",
  "default",
];

// Create the CustomCursorType object
const CustomCursorType = {
  type: "default",
  setType: () => {},
};

// Create the context
const CustomCursorContext = createContext(CustomCursorType);

module.exports = CustomCursorContext;
