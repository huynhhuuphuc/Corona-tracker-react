import React, { useEffect, useState } from "react";
// import { Line } from "react-chartjs-2";

function LineGraph() {
  const [data, setData] = useState({});

  // useEffect(() => {
  //   fetch("https://disease.sh/v3/covid-19/historical/all?lastday=120")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("data: ", data);
  //     });
  // }, []);

  return (
    <div>
      {/* <Line data option /> */}
      Chart Data
    </div>
  );
}

export default LineGraph;
