import React from 'react'
import {RouterProvider} from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles.js";
import router from "./utils/router";

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  )
}

export default App
