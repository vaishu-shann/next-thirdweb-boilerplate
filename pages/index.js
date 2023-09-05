import React from "react";
import Navigationbar from "./Navbar/Navigationbar";

function Home() {
  return (
    <div>
      <div className="bg-white dark:bg-gray-900">
        <Navigationbar />
      </div>
      <div> This is home page</div>
    </div>
  );
}

export default Home;
