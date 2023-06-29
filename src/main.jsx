import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Beranda from "./pages/Beranda.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";

//setup react router disini
const router = createBrowserRouter([
  {
    //yang pertama kali ditampilkan
    element: <App />,
    //didalam path bisa kita tambahkan children untuk nesting route
    children: [
      {
        //path adalah alamat web yang akan diakses di webnya nanti
        path: "/",

        //element untuk menampilkan component/page mana yang akan ditampilkan
        element: <Beranda />,
      },
      {
        //router dengan params atau pelemparan data didalam router
        //kita hanya harus menambah /:nama_variabel untuk menandakan bahwa path ini memerlukan param ketika mengaksesnya
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* untuk merender semua router yang telah kita setup */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
