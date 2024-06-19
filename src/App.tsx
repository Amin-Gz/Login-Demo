// import { useState } from "react";
import LogIn from "./logIn";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./SignUp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LogIn></LogIn>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
