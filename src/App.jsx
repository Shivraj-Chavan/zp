import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import "../src/App.css"


const App = () => {
  
  return (
 <RouterProvider router={routes} /> 
  );
};

export default App;
