import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Details from "./components/Details";
import NotFound from "./components/NotFound";
import Home from "./components/Home";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    // errorElement: <NotFound />
  },
  {
    path: "/details",
    Component: Details,
    errorElement: <NotFound />
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
