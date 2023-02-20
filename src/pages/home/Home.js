import React from "react";
import Banner from "../../components/Banner/Banner";
import Benefit from "../../components/Benefit/Benefit";
import Destination from "../../components/Destination/Destination";
import Explore from "../../components/Explore/Explore";
import Remember from "../../components/Remember/Remember";
import Selected from "../../components/Selected/Selected";
import Subscribe from "../../components/Subscribe/Subscribe";
function Home() {
  return (
    <>
      <Banner></Banner>
      <Benefit></Benefit>
      <Destination></Destination>
      <Remember></Remember>
      <Selected></Selected>
      <Explore></Explore>
      <Subscribe></Subscribe>
    </>
  );
}

export default Home;
