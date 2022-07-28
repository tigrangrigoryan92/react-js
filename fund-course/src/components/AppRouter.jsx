// import React from "react";
// import {Routes, Route, Navigate} from "react-router-dom";
// import {routes} from "../router";
//
// const AppRouter = () => {
//
//
//   return (
//     <Routes>
//       {routes.map((route =><Route key={route.path} path={route.path} element={route.component}/>))}
//       <Route path='*' element={<Navigate to="error" replace/>}/>
//     </Routes>
//   );
// };
// export default AppRouter;


import * as React from "react";
import { useRoutes } from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import PostPage from "../pages/PostPage";
import Errors from "../pages/Errors";

export default function App() {
  return useRoutes([
    {
      path: "/",
      element: <Posts />,
    },
    {
      path: "posts",
      element: <Posts />,
    },
    {
      path: "about",
      element: <About />,
    },
    { path: "posts/:id", element: <PostPage /> },
    { path: "*", element: <Errors /> },
  ]);
}
