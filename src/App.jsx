import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        {/* outlet digunakan untuk merender element router children  */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
