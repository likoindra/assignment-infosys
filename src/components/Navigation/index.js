import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Homepage from "../Homepage";
import Details from "../Details";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Homepage />} />
      <Route path="/:id" element={<Details />} />
    </>
  )
);
